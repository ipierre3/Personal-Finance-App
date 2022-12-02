from rest_framework import serializers
from .models import Transactions
from account.models import Account

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'name', 'balance', 'institution_id', 'account_type', 'user_id']

class TransactionsSerializer(serializers.ModelSerializer):
    account = AccountSerializer(many=False, read_only=True)
    class Meta:
        model = Transactions
        fields = ['id', 'account_id', 'amount', 'description', 'note', 'date', 'is_reccuring']
        depth = 1
    account_id = serializers.IntegerField(write_only=True)
