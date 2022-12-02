from django.db import models
from transactions.models import Transactions
from categories.models import Categories

# Create your models here.

class TransactionsCategory(models.Model):
    transactions = models.ForeignKey(Transactions, null=False, unique=True, db_index=True, on_delete=models.CASCADE)
    categories = models.ForeignKey(Categories, null=False, db_index=True, on_delete=models.CASCADE)