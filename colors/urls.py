from django.urls import path
from . import views

urlpatterns = [
    path('', views.ColorListView.as_view(), name='main-view')
]
