from django.urls import path
from .views import SearchList, SearchDetail

urlpatterns = [
    path('search/', SearchList.as_view(), name='search-list'),
    path('search/<int:pk>/', SearchDetail.as_view(), name='search-detail'),
]