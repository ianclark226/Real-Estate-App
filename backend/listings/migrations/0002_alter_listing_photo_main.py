# Generated by Django 3.2.9 on 2021-11-09 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='photo_main',
            field=models.ImageField(upload_to='photos/%Y/%m/%d/'),
        ),
    ]
