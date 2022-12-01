from django.db import models
from authentication.models import User
# from account_type.models import AccountType

# Create your models here.

class Account(models.Model):
  name = models.CharField(max_length=255)
  balance = models.DecimalField(max_digits=8, decimal_places=2)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  account_type = models.CharField(max_length=255)
  institution = models.ForeignKey(Institution, on_delete=models.CASCADE)