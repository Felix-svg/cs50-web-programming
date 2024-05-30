from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "hello/hello.html")


# def felix(request):
#     return HttpResponse("Hello, Felix")


# def omondi(request):
#     return HttpResponse("Hello, Omondi")


def greet(request, name):
    return render(request, "hello/greet.html", {"name": name.capitalize()})
