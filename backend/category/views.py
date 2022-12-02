from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import CategorySerializer
from .models import Category

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def categories_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data["category"]
        serializer = CategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def categories_detail(request, pk):
    categories = get_object_or_404(Category, pk=pk)
    if request.method == 'GET':
        serializer = CategorySerializer(categories)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer(categories, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        categories.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)