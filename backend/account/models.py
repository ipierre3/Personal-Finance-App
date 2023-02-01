from django.db import models
from authentication.models import User
from institution.models import Institution

# Create your models here.

class Account(models.Model):
    name = models.CharField(null=False, max_length=255)
    institution = models.ForeignKey(Institution, null=False, db_index=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    balance = models.DecimalField(null=False, max_digits=8, decimal_places=2)
    account_type = models.CharField(null=False, db_index=True, max_length=255)
    
    class Meta:
        indexes = [
            models.Index(fields=['institution'], name='index_account_on_institution'),
            models.Index(fields=['user'], name='index_account_on_user'),
        ]