from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import api_root, HospitalViewSet, DoctorViewSet

router = DefaultRouter()
router.register(r'hospitals', HospitalViewSet)
router.register(r'doctors', DoctorViewSet)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('', include(router.urls)),
]