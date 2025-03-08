from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse
from .models import Hospital, Doctor
from .serializers import HospitalSerializer, DoctorSerializer
from rest_framework import viewsets

# Custom API Root View
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'hospitals': reverse('hospital-list', request=request, format=format),
        'doctors': reverse('doctor-list', request=request, format=format),
        'custom_message': 'Welcome to the API!',
    })

# ViewSets
class HospitalViewSet(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer