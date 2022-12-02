from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import AccountSerializer
from .models import Account


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def account_list(request):
    if request.method == 'GET':
        account = Account.objects.filter()
        serializer = AccountSerializer(account, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AccountSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
@permission_classes([AllowAny])
def account_detail(request, user_id):
    account = get_object_or_404(Account, user__id=user_id)
    if request.method == 'GET':
        userAccount = Account.objects.filter(user__id=user_id)
        serializer = AccountSerializer(userAccount, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AccountSerializer(account, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)