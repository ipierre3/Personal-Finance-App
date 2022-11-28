from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import AccountType
from .serializers import AccountTypeSerializer

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def type_of_accounts(request):
    if request.method == 'GET':
        account_type = AccountType.objects.all()
        serializer = AccountTypeSerializer(account_type,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AccountTypeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def account_type_detail(request, pk):
    account_type = get_object_or_404(AccountType, pk=pk)
    if request.method == 'GET':
        serializer = AccountTypeSerializer(account_type)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AccountTypeSerializer(account_type, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)