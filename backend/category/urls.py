from django.urls import path
from . import views

urlpatterns = [
    path('', views.category_list),
    path('<int:pk/', views.category_detail)
]