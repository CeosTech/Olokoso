from rest_framework import serializers
from restaurant.models import *






class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = ["id",
                  "nom",
                  "description",
                  ]


class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = ["id",
                  "nom",
                  "description",
                  "prix",
                  "ingredients",
                  "categories",
                  "disponibilite",
                  "image",
                  ]




class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = [
            "id",
            "nom",
            "description",
        ]



class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ["id",
                  "nom",
                  "description",
                  "image",
                  "prix",
                  "produits",
                  ]
