# Generated by Django 4.0.4 on 2022-12-02 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tagging', '0002_rename_tags_tagging_tag_and_more'),
        ('transactions_category', '0002_rename_categories_transactionscategory_category_and_more'),
        ('account', '0001_initial'),
        ('transactions', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Transactions',
            new_name='Transaction',
        ),
    ]
