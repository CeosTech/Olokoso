# Generated by Django 3.1.6 on 2021-03-02 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0013_auto_20210302_0957'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='image_url',
        ),
        migrations.RemoveField(
            model_name='produit',
            name='image_url',
        ),
        migrations.AddField(
            model_name='menu',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='produit',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
