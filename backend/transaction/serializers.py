from rest_framework import serializers
from .models import Transaction
from account.models import Account
from category.models import Category

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'name', 'balance', 'institution_id', 'account_type', 'user_id']
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
      model = Category
      fields = ['id', 'name']

class TransactionSerializer(serializers.ModelSerializer):
    account_id = AccountSerializer(many=False, read_only=True)
    category_id = CategorySerializer(many=False, read_only=True)
    class Meta:
        model = Transaction
        fields = ['id', 'account_id', 'amount', 'description', 'note', 'date', 'category_id', 'is_reccuring']
        depth = 1
    account_id = serializers.IntegerField()
    category_id = serializers.IntegerField()
