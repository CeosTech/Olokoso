from django.contrib import admin
from restaurant.models import *


class ProduitAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'prix', 'aff_categories')


class CategorieAdmin(admin.ModelAdmin):
    list_display = ('id', 'libelle')


class MenuAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'prix', 'aff_categories')


# Register your models here.
admin.site.register(Categorie)
admin.site.register(Produit)
admin.site.register(Menu)
admin.site.register(Ingredient)
#admin.site.register(Ingredient_info)
