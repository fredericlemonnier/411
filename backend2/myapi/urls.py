from django.urls import include, path
from rest_framework import routers
from . import views

# router = routers.DefaultRouter()
# router.register("", views.UserViewSet, basename="userviewset")

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
     path('getBreweries/', views.getBreweries),
     path('signup/', views.signup),
    path('login/', views.login),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]