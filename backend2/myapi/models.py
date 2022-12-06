from django.db import models

# import uuid
# from typing import Optional

from mongoengine import Document, fields

# Create your models here.
class User(Document):
    id = fields.StringField()
    name  = fields.StringField()
    email = fields.StringField()

    # not sure what to do w the stuff directly below
    # name = models.CharField(max_length=60)

    # def __str__(self):
    #     return self.name

# class UserUpdate(UserModel): 
#     title: Optional[str]
#     username: Optional[str]
#     password: Optional[str]

# class UserGet(UserModel)
