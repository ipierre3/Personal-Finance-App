from django.urls import path
from . import views

urlpatterns = [
    path('', views.categories_list),
    path('<int:pk/', views.categories_detail)
]