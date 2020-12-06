from django.db import models


class Customer (models.Model):
    
    name=models.CharField(max_length=70,null=True)
    address=models.CharField(max_length=200,null=True)
    mobile=models.CharField(max_length=200,null=True)
    email=models.CharField(max_length=200,null=True)
    password=models.CharField(max_length=200,null=True)
    entry_date=models.DateTimeField(auto_now_add=True,null=True)

    def __str__(self):
        return self.name
        
class Tag(models.Model):
    CATEGORY=(
        ('Shirts','Shirts'),
        ('Shoes','Shoes'),
        ('Trousers','Trousers'),
        ('Dress','Dress')
    )
    category=models.CharField(max_length=200,null=True,choices=CATEGORY)
    def __str__(self):
        return self.category



class Item (models.Model):
    
    itemName=models.CharField(max_length=70,null=True)
    details=models.CharField(max_length=200,null=True)
    price=models.FloatField(null=True)
    image=models.CharField(max_length=200,null=True)
    quantity=models.CharField(max_length=200,null=True)
    entry_date=models.DateTimeField(auto_now_add=True,null=True)
    tag=models.ManyToManyField(Tag,null=True)
    slug = models.SlugField()
    
    def __str__(self):
        return self.itemName

    def get_absolute_url(self):
        return reverse("core:product", kwargs={
            'slug': self.slug
        })

class Order (models.Model):
    STATUS=(
        ('Pending','Pending'),
        ('Deleviered','Deleviered'),
        ('in progress','in progress'),
        ('out of order','out of order')
    )
    customer=models.ForeignKey(Customer,null=True,on_delete=models.SET_NULL)
    item=models.ForeignKey(Item,null=True,on_delete=models.SET_NULL)

    quantity=models.CharField(max_length=70)
    status=models.CharField(max_length=200,choices=STATUS)
    price=models.FloatField(null=True)
    image=models.CharField(max_length=200)
    quantity=models.CharField(max_length=200)
    entry_date=models.DateTimeField(auto_now_add=True,null=True)







# Create your models here.
