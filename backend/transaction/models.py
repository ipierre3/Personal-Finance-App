from django.db import models
from account.models import Account
from category.models import Category

# Create your models here.

class Transaction(models.Model):
    account = models.ForeignKey(Account, null=False, db_index=True, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2, null=False)
    description = models.CharField(null=False, blank=True, max_length=255)
    note = models.TextField(null=True, blank=True)
    date = models.DateTimeField(null=False)
    category = models.ForeignKey(Category, null=False, default="UNCATEGORIZED", db_index=True, on_delete=models.CASCADE)
    is_reccuring = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        indexes = [
            models.Index(fields=['account'], name='index_transactions_on_account')
        ]