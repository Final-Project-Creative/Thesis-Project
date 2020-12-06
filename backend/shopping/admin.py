from django.contrib import admin

# Register your models here.

from .models import Customer,Tag , Item,Order 
# from .models import *

admin.site.register(UserProfile)
admin.site.register(Item)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(CheckoutAddress)
admin.site.register(Payment)

