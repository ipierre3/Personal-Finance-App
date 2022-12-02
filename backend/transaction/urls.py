from django.urls import path
from . import views

urlpatterns = [
    path('', views.transaction_list),
    path('<int:pk/', views.transaction_detail)
]