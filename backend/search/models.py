from django.db import models

# Create your models here.
class Search(models.Model):
    content = models.TextField()
    searchable_id = models.IntegerField()
    searchable_type = models.CharField(max_length=100)
    
    class Meta:
        indexes = [
            models.Index(
                fields=['searchable_type', 'searchable_id'],
                name='index_search_on_searchable_type_and_searchable_id'
            )
        ]