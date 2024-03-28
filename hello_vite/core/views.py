from django.shortcuts import render
from django.http import HttpResponse
import os

from hello_vite.route_decorator import Route

route = Route()


@route("/")
def index(request):
    return render(
        request,
        "index.html",
        context={
            "cf_token": os.environ.get("CLOUDFLARE_TOKEN"),
        },
    )
