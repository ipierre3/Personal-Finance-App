from rest_framework import serializers
from .models import Categories

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
      model = Categories
      fields = ['id', 'name']
      depth = 1