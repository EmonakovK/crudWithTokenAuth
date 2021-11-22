from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views
from .views import UserViewSets, BookViewSets

router = routers.DefaultRouter()
router.register('users', UserViewSets)
router.register('books', BookViewSets)

urlpatterns = [
    path('', include(router.urls)),
]
