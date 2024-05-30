from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # path("felix", views.felix, name="felix"),
    # path("omondi", views.omondi, name="omondi"),
    path("<str:name>", views.greet, name="greet")
]