from django.urls import path
from . import views

urlpatterns = [
    path('', views.institution_list),
    path('', views.institution_detail)
]