# Generated by Django 2.0.4 on 2018-04-14 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='content',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='page',
            name='desc',
            field=models.TextField(blank=True, null=True),
        ),
    ]
