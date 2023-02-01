from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import InstitutionSerializer
from .models import Institution


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def institution_list(request):
    if request.method == 'GET':
        institution = Institution.objects.all()
        serializer = InstitutionSerializer(institution, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = InstitutionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def institution_detail(request, pk):
    institution = get_object_or_404(Institution, pk=pk)
    if request.method == 'GET':
        serializer = InstitutionSerializer(institution)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = InstitutionSerializer(institution, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        institution.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
