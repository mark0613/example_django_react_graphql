import graphene

from .article_schema import ArticleQuery, ArticleMutation


class Query(ArticleQuery):
    pass


class Mutation(ArticleMutation):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
