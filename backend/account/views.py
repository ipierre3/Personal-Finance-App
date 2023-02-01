from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import AccountSerializer
from .models import Account


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def account_list(request, uid, inst_id):
    if request.method == 'GET':
        account = Account.objects.filter(user_id=uid, institution_id=inst_id)
        serializer = AccountSerializer(account, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AccountSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user_id=uid, institution_id=inst_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def account_detail(request, uid, inst_id, pk):
    account = get_object_or_404(Account, pk=pk)
    if request.method == 'GET':
        serializer = AccountSerializer(account)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AccountSerializer(account, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user_id=uid, institution_id=inst_id)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
