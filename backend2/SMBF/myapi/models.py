from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name

# ------------------- added 11/27
class Dweet(models.Model):
    user = models.ForeignKey(
        User, related_name="user", on_delete=models.DO_NOTHING
    )
    body = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)
    # --- store: game & date & time created at
    games = models
