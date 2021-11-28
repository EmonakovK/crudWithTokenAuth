from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from .views import TestTry


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('login_views/', include('rest_framework.urls')),
    path('', TestTry.as_view())
]
