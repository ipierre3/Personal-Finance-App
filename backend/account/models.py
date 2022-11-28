from django.db import models
from authentication.models import User
# from AccountType.models import User

# Create your models here.

class Account(models.Model):
  name = models.CharField(max_length=255)
  balance = models.DecimalField(max_digits=8, decimal_places=2)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  # type = models.ForeignKey(AccountType, on_delete=models.CASCADE)