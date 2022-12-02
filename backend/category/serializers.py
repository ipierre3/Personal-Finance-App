from rest_framework import serializers
from .models import Category

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
      model = Category
      fields = ['id', 'name']
      depth = 1