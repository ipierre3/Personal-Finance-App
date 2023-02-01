from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import TransactionSerializer
from .models import Transaction

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def transaction_list(request, apk, cpk):
    if request.method == 'GET':
        transaction = Transaction.objects.filter(account_id=apk, category_id=cpk)
        serializer = TransactionSerializer(transaction, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TransactionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(account_id=apk, category_id=cpk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([AllowAny])
def transaction_detail(request, apk, cpk, pk):
    transaction = get_object_or_404(Transaction, pk=pk)
    if request.method == 'GET':
        serializer = TransactionSerializer(transaction)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TransactionSerializer(transaction, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(account_id=apk, category_id=cpk)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)