from rest_framework import serializers
from .models import Account
from authentication.models import User
from institution.models import Institution

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = ['id', 'name']


class AccountSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    institution = InstitutionSerializer(many=False, read_only=True)

    class Meta:
        model = Account
        fields = ['id', 'name', 'balance', 'institution_id', 'account_type', 'user_id']
        depth = 1
    user_id = serializers.IntegerField(write_only=True)
    institution_id = serializers.IntegerField(write_only=True)
