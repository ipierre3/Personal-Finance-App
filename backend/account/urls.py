from django.urls import path
from . import views

urlpatterns = [
    path('', views.account_list),
    path('<int:user_id/', views.account_detail)
]