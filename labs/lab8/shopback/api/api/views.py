from rest_framework import viewsets
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.shortcuts import render
from django.http import JsonResponse

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

def ProductListView(request):
    # Здесь можно добавить логику для получения продуктов из базы данных
    return JsonResponse({"message": "This is the product list."})
