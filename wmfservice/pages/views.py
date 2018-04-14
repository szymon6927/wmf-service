from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView, ListView

from .models import Page


class HomePageView(ListView):
    model = Page
    context_object_name = 'pages'
    template_name = 'home.html'


class AboutPageView(TemplateView):
    template_name = 'about.html'
