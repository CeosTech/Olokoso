from django.shortcuts import render
from rest_framework import generics, status
from restaurant.serializers import *
from restaurant.models import *

from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

categories_produits = ['burgers', 'boissons',
                       'desserts', 'sides', 'poutines', 'entrees']


class CategorieView(generics.ListCreateAPIView):
    queryset = Categorie.objects.all()
    serializer_class = CategorieSerializer


class CategorieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categorie.objects.all()
    serializer_class = CategorieSerializer



class ProduitView(generics.ListCreateAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer


class ProduitDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer


class MenuView(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    def get(self, request):
        return Response(MenuSerializer(Menu.objects.all(), many=True).data)

class MenuDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
