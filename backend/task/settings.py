try:
    from .local_settings import *
except ModuleNotFoundError:
    from .production_settings import *
