from django.db import models
from account.models import Account

# Create your models here.

class Transactions(models.Model):
    account = models.ForeignKey(Account, null=False, db_index=True, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2, null=False)
    description = models.CharField(null=False, max_length=255)
    note = models.TextField(max_length=255)
    date = models.DateTimeField(("created_at"), null=False, auto_now=False, auto_now_add=False)
    is_reccuring = models.BooleanField(null=False, default=False)