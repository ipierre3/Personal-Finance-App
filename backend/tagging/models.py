from django.db import models
from transaction.models import Transaction
from tag.models import Tag

# Create your models here.

class Tagging(models.Model):
    transaction = models.ForeignKey(Tag, null=False, on_delete=models.CASCADE)
    tag = models.ForeignKey(Transaction, null=False, on_delete=models.CASCADE)