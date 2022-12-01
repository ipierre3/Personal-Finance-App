from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import TagsSerializer
from .models import Tags

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def tags_list(request):
    if request.method == 'GET':
        tags = Tags.objects.all()
        serializer = TagsSerializer(tags, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data["tag"]
        serializer = TagsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def tags_detail(request, pk):
    tags = get_object_or_404(Tags, pk=pk)
    if request.method == 'GET':
        serializer = TagsSerializer(tags)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TagsSerializer(tags, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        tags.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)