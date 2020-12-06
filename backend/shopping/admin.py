from django.contrib import admin

# Register your models here.

from .models import Customer,Tag , Item,Order 
# from .models import *

admin.site.register(Customer)
admin.site.register(Tag)
admin.site.register(Item)
admin.site.register(Order)

