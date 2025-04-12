from django.shortcuts import render
from rest_framework import viewsets
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    # Custom action to get vacancies for a specific company
    @action(detail=True, methods=['get'])
    def vacancies(self, request, pk=None):
        company = self.get_object()  # Get the company based on the ID
        vacancies = Vacancy.objects.filter(company=company)  # Filter vacancies for that company
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=False)
    def top_ten(self, request):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_vacancies, many=True)
        return Response(serializer.data)