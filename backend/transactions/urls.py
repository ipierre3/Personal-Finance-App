from django.urls import path
from . import views

urlpatterns = [
    path('', views.transactions_list),
    path('', views.transactions_detail)
]