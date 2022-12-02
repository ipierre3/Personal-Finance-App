from rest_framework import serializers
from .models import Tagging
from transaction.models import Transaction
from tag.models import Tag

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'account_id', 'amount', 'description', 'note', 'date', 'is_reccuring']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class TaggingSerializer(serializers.ModelSerializer):
    transaction = TransactionsSerializer(many=True, read_only=True)
    tag = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Tagging
        fields = ['id', 'transaction_id', 'tag_id']
        depth = 1
    transaction_id = serializers.IntegerField()
    tag_id = serializers.IntegerField()
