from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'web/index.html')

def slicer(request):
    return render(request, 'web/slicer.html')