from django.contrib import admin
from django.urls import path
from django.conf.urls import include
import sys
sys.path.append('..')
from api.views import TestTry


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('auth/', include('djoser.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('', TestTry.as_view())
]
