from django.db import models

# Create your models here.

class Institution(models.Model):
  name = models.CharField(null=False, max_length=255)