from django.db import models
from account.models import Account

# Create your models here.

class Transactions(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.CharField(max_length=255)
    note = models.CharField(max_length=255)
    description = models.DateTimeField(("created_at"), auto_now=False, auto_now_add=False)
    is_reccuring = models.BooleanField(null=False, default=False)