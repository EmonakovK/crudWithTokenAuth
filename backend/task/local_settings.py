from .base_settings import *

CORS_REPLACE_HTTPS_REFERER = False
HOST_SCHEME = "http://"
SECURE_PROXY_SSL_HEADER = None
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False
SECURE_HSTS_SECONDS = None
SECURE_HSTS_INCLUDE_SUBDOMAINS = False
SECURE_FRAME_DENY = False

SECRET_KEY = 'django-insecure-38)h*!sk)omsp&j9l)o$!qevga8u*xx(!dnc+(jv*$%b^566p4'

DEBUG = True

ALLOWED_HOSTS = ['.localhost', '127.0.0.1', '[::1]']

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

