from rest_framework import serializers
from .models import Tag

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class TagSerializer(serializers.ModelSerializer):
    class Meta:
      model = Tag
      fields = ['id', 'name']
      depth = 1