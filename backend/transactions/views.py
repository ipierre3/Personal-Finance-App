from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import TransactionsSerializer
from .models import Transaction

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def transactions_list(request):
    if request.method == 'GET':
        transactions = Transaction.objects.all()
        serializer = TransactionsSerializer(transactions, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data["description"] + request.data["notes"] + request.data["date"] + request.data ["account_id"] + request.data["category"]
        serializer = TransactionsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def transactions_detail(request, pk):
    transactions = get_object_or_404(Transaction, pk=pk)
    if request.method == 'GET':
        serializer = TransactionsSerializer(transactions)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TransactionsSerializer(transactions, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        transactions.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)