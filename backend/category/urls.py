from django.urls import path
from . import views

urlpatterns = [
    path('', views.category_list),
    path('<pk/', views.category_detail)
]