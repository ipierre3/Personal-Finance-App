from django.urls import path
from . import views

urlpatterns = [
    path('', views.tags_list),
    path('', views.tags_detail)
]