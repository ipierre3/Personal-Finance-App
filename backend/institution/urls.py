from django.urls import path
from . import views

urlpatterns = [
    path('', views.institution_list),
    path('<int:pk/', views.institution_detail)
]