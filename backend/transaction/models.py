from django.db import models
from account.models import Account
from category.models import Category

# Create your models here.

class Transaction(models.Model):
    account = models.ForeignKey(Account, null=False, db_index=True, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2, null=False)
    description = models.CharField(null=False, max_length=255)
    note = models.TextField(max_length=255)
    date = models.DateTimeField(("posted_on"), null=False, auto_now=False, auto_now_add=False)
    category = models.ForeignKey(Category, null=False, default="UNCATEGORIZED", db_index=True, on_delete=models.CASCADE)
    is_reccuring = models.BooleanField(null=False, default=False)