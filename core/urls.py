from django.contrib import admin
from django.template.response import TemplateResponse
from django.urls import re_path
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_GET
from django.views.generic import TemplateView


@method_decorator(ensure_csrf_cookie, name='dispatch')
class ReactView(TemplateView):
    template_name = "index.html"


@require_GET
def robots_txt(request):
    return TemplateResponse(request, 'robots.txt', content_type="text/plain")


urlpatterns = [
    re_path(r'admin/', admin.site.urls),
    re_path(r'^robots.txt/?$', robots_txt),
    re_path(r'^.*', ReactView.as_view()),
]
