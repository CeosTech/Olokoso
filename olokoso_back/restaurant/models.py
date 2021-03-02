from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Admin_account(models.Model): # Ajouter à l'admin Django
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)


class Ingredient(models.Model):
    nom = models.CharField(max_length=50)
    description = models.TextField(null=True)

    def __str__(self):
        return self.nom


class Categorie(models.Model):
    nom = models.CharField(max_length=50)
    description = models.TextField(null=True)

    def __str__(self):
        return self.nom


class Produit(models.Model):
    nom = models.CharField(max_length=20, unique=True)
    description = models.TextField(null=True, blank=True)
    categories = models.ManyToManyField(Categorie, blank=True) #Entrée Plats Dessert
    ingredients = models.ManyToManyField(Ingredient, blank=True)
    image = models.ImageField(null=True)
    prix = models.FloatField(default=0)
    disponibilite = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.nom



class Menu(models.Model):
    nom = models.CharField(max_length=20, unique=True)
    description = models.TextField(null=True, blank=True)
    produits = models.ManyToManyField(Produit)
    image = models.ImageField(null=True)
    prix = models.FloatField(default=0)
    disponibilite = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.nom

