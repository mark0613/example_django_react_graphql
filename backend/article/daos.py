from .models import Article


class ArticleDao:
    def find_all_articles(self):
        return Article.objects.all()

    def find_article_by_id(self, id):
        return Article.objects.get(pk=id)

    def find_article_by_title(self, title):
        return Article.objects.get(title=title)

    def create_article(self, article):
        article.save()
