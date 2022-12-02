from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(null=False, max_length=255)