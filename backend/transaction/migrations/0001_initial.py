# Generated by Django 4.0.4 on 2022-12-02 21:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=8)),
                ('description', models.CharField(max_length=255)),
                ('note', models.TextField(max_length=255)),
                ('date', models.DateTimeField(verbose_name='posted_on')),
                ('is_reccuring', models.BooleanField(default=False)),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.account')),
                ('category', models.ForeignKey(default='UNCATEGORIZED', on_delete=django.db.models.deletion.CASCADE, to='category.category')),
            ],
        ),
    ]