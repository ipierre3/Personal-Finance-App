from django.db import models
from transactions.models import Transactions
from categories.models import Categories

# Create your models here.

class TransactionCategory(models.Model):
    transactions = models.ForeignKey(Transactions, on_delete=models.CASCADE)
    categories = models.ForeignKey(Categories, db_index=True, unique=True, on_delete=models.CASCADE)