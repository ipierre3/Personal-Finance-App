from rest_framework import serializers
from .models import TransactionsCategory
from transactions.models import Transactions
from categories.models import Categories

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = ['id', 'account_id', 'amount', 'description', 'note', 'date', 'is_reccuring']

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
      model = Categories
      fields = ['id', 'name']

class TransactionsCategorySerializer(serializers.ModelSerializer):
    transactions = TransactionsSerializer(many=False, read_only=True)
    categories = CategoriesSerializer(many=False, read_only=True)

    class Meta:
        model = TransactionsCategory
        fields = ['id', 'transaction_id', 'category_id']
        depth = 1
    transactions_id = serializers.IntegerField(write_only=True)
    category_id = serializers.IntegerField(write_only=True)