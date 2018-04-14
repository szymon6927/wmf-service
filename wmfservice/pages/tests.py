from django.test import TestCase
from django.test import SimpleTestCase
from .models import Page


# Create your tests here.

class PageModelTests(TestCase):
    def setUp(self):
        Page.objects.create(title='title', sub_title='sub-title', content='content', desc='desc')

    def test_page_content(self):
        post = Page.objects.get(id=1)
        self.assertEqual(post.title, 'title')


class PageViewTests(TestCase):
    def test_home_page_status(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_about_page_status(self):
        response = self.client.get('/about/')
        self.assertEqual(response.status_code, 200)
