from rest_framework import serializers
from .models import Tagging
from transactions.models import Transaction
from tag.models import Tag

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'account_id', 'amount', 'description', 'note', 'date', 'is_reccuring']

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class TaggingSerializer(serializers.ModelSerializer):
    transaction = TransactionsSerializer(many=False, read_only=True)
    tag = TagsSerializer(many=False, read_only=True)

    class Meta:
        model = Tagging
        fields = ['id', 'transaction_id', 'tags_id']
        depth = 1
    transaction_id = serializers.IntegerField(write_only=True)
    tags_id = serializers.IntegerField(write_only=True)
