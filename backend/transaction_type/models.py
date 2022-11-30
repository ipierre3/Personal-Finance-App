from django.db import models

# Create your models here.

class TransactionType(models.Model):
  category = models.CharField(max_length=255)
  reccuring = models.BooleanField()