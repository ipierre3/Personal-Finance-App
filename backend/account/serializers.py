from rest_framework import serializers
from .models import Account
from authentication.models import User

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'first_name', 'last_name']

class AccountSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Account
        fields = ['id', 'name', 'balance', 'account_type_id', 'user_id']
        depth = 1
    user_id = serializers.IntegerField(write_only=True)
