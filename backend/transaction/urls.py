from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.transaction_list),
    path('<pk>/', views.transaction_detail)
]