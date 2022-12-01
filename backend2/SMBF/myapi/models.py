from django.db import models

import uuid
from typing import Optional
from pydantic import Basemodel, Field

# Create your models here.
class User(models.Model):
    id:  str = Field(default_factory=uuid.uuid4, alias="_id")
    username: str = Field(...)
    password: str = Field(...)

    # not sure what to do w the stuff directly below
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name

class UserUpdate(UserModel): 
    title: Optional[str]
    username: Optional[str]
    password: Optional[str]
