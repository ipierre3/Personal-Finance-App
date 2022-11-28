from django.urls import path
from . import views

urlpatterns = [
    path('', views.account_list),
    path('<int:pk>/', views.account_detail)
]