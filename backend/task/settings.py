try:
    from .local_settings import *
except ImportError:
    try:
        from .production_settings import *
    except ImportError:
        pass
