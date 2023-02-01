from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.institution_list),
    path('<int:pk>/', views.institution_detail),
    path('<int:inst_id>/account/', include('account_app.urls'))
]