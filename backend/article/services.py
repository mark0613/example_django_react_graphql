from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError

from .daos import ArticleDao
from .exceptions import ArticleNotFoundException, DuplicateArticleTitleException


article_dao = ArticleDao()

class ArticleService:
    def get_all_articles(self):
        return article_dao.find_all_articles()

    def get_article(self, id=None, title=None):
        if id is None and title is None:
            raise ArticleNotFoundException('必須給予編號(id)或標題(title)')
        
        article = None
        try:
            if id is not None:
                article = article_dao.find_article_by_id(id)
            else:
                article = article_dao.find_article_by_title(title)
        except ObjectDoesNotExist:
            raise ArticleNotFoundException('查無文章')
        return article

    def create_article(self, article):
        try:
            article_dao.create_article(article)
        except IntegrityError:
            raise DuplicateArticleTitleException('文章標題(title)重複')
