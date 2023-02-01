from rest_framework import serializers
from .models import Search

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = ['content', 'searchable_id', 'searchable_type']
        depth = 1
