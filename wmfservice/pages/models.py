from django.db import models


# Create your models here.
class Page(models.Model):
    title = models.CharField(max_length=250)
    sub_title = models.CharField(max_length=250)
    content = models.TextField(blank=True, null=True)
    desc = models.TextField(blank=True, null=True)

    def __str__(self):
        """String representation of the model"""
        return self.title