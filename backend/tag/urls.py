from django.urls import path
from . import views

urlpatterns = [
    path('', views.tag_list),
    path('<pk/', views.tag_detail)
]