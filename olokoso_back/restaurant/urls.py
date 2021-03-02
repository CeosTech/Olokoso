from django.urls import path

from restaurant.views import *

app_name = 'restaurantApi'


urlpatterns = [
    # /restaurant/carte
    path('categorie/', CategorieView.as_view()),
    path('categorie/<int:pk>/', CategorieDetailView.as_view()),
    path('produit/', ProduitView.as_view()),
    path('produit/<int:pk>/', ProduitDetailsView.as_view()),
    path('menu/', MenuView.as_view()),
    path('menu/<int:pk>/', MenuDetailsView.as_view()),

]
