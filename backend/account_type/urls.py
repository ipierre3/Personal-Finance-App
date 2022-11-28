from django.urls import path
from . import views

urlpatterns = [
    path('', views.type_of_accounts),
    path('<int:pk>/', views.account_type_detail)
]