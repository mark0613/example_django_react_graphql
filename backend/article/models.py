from django.db import models
from datetime import datetime


class Article(models.Model):
    title = models.CharField('title', max_length=255)
    content = models.TextField('content')
    time = models.DateTimeField('time', default=datetime.now)

    def __str__(self):
        return str(self.id) + ": " + self.title
