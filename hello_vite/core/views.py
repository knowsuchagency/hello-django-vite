from django.shortcuts import render
from django.http import HttpResponse

from hello_vite.route_decorator import Route

route = Route()


@route("/")
def index(request):
    return render(request, "index.html")
