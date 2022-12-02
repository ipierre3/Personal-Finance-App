from django.urls import path
from . import views

urlpatterns = [
    path('', views.account_list),
    path('', views.account_detail)
]