from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import TagSerializer
from .models import Tag

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def tag_list(request):
    if request.method == 'GET':
        tag = Tag.objects.all()
        serializer = TagSerializer(tag, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data["tag"]
        serializer = TagSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([AllowAny])
def tag_detail(request, pk):
    tag = get_object_or_404(Tag, pk=pk)
    if request.method == 'GET':
        serializer = TagSerializer(tag)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TagSerializer(tag, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        tag.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)