from rest_framework import serializers
from .models import Tags

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
      model = Tags
      fields = ['id', 'name']
      depth = 1