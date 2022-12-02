from django.db import models
from transactions.models import Transactions
from tags.models import Tags

# Create your models here.

class Tagging(models.Model):
    transactions = models.ForeignKey(Tags, null=False, on_delete=models.CASCADE)
    tags = models.ForeignKey(Transactions, null=False, on_delete=models.CASCADE)