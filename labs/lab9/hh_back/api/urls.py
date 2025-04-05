from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'companies', views.CompanyViewSet)
router.register(r'vacancies', views.VacancyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('companies/<int:id>/vacancies/', views.VacancyViewSet.as_view({'get': 'list'}), name='company-vacancies')
]