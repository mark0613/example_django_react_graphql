import graphene

from .article_schema import ArticleQuery, ArticleMutation
from .user_schema import UserQuery, UserMutation


class Query(ArticleQuery, UserQuery):
    pass


class Mutation(ArticleMutation, UserMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
