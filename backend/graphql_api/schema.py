import graphene

from .article_schema import ArticleQuery, ArticleMutation
from .auth_schema import AuthMutation
from .user_schema import UserQuery, UserMutation


class Query(ArticleQuery, UserQuery):
    pass


class Mutation(AuthMutation, ArticleMutation, UserMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
