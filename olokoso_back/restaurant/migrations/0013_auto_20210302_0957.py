# Generated by Django 3.1.6 on 2021-03-02 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0012_admin_account'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categorie',
            name='libelle',
        ),
        migrations.RemoveField(
            model_name='ingredient',
            name='ingredient_info',
        ),
        migrations.AddField(
            model_name='categorie',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='ingredient',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='menu',
            name='disponibilite',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AddField(
            model_name='produit',
            name='disponibilite',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.DeleteModel(
            name='Ingredient_info',
        ),
    ]
