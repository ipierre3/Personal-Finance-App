from rest_framework import serializers
from .models import Tagging
from transactions.models import Transactions
from tags.models import Tags

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = ['id', 'account_id', 'amount', 'description', 'note', 'date', 'is_reccuring']

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['id', 'name']

class TaggingSerializer(serializers.ModelSerializer):
    transactions = TransactionsSerializer(many=False, read_only=True)
    tag = TagsSerializer(many=False, read_only=True)

    class Meta:
        model = Tagging
        fields = ['id', 'transaction_id', 'tags_id']
        depth = 1
    transactions_id = serializers.IntegerField(write_only=True)
    tag_id = serializers.IntegerField(write_only=True)
