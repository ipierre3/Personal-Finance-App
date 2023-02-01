from rest_framework import generics
from .serializers import SearchSerializer
from rest_framework.permissions import AllowAny
from .models import Search


class SearchList(generics.ListAPIView):
    queryset = Search.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SearchSerializer

class SearchDetail(generics.RetrieveAPIView):
    queryset = Search.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SearchSerializer