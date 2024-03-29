from rest_framework import serializers
from .models import Account
from authentication.models import User
from institution.models import Institution

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']

class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = ['id', 'name']

class AccountSerializer(serializers.ModelSerializer):
    #user_id = UserSerializer(many=False, read_only=True)
    institution = InstitutionSerializer(many=False, read_only=True)

    class Meta:
        model = Account
        fields = ['id', 'name', 'institution', 'institution_id', 'user_id', 'balance', 'account_type']
        depth = 1
    #user_id = serializers.IntegerField(read_only=True)
    institution_id = serializers.IntegerField(read_only=True)