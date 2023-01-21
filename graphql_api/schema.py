import graphene
from graphene_django.types import DjangoObjectType, ObjectType

from article.models import Article


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article


class Query(ObjectType):
    article = graphene.Field(ArticleType, id=graphene.Int())
    articles = graphene.List(ArticleType)

    def resolve_article(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Article.objects.get(pk=id)

        return None

    def resolve_articles(self, info, **kwargs):
        return Article.objects.all()


class ArticleInput(graphene.InputObjectType):
    title = graphene.String()
    content = graphene.String()
    time = graphene.DateTime()


class CreateArticle(graphene.Mutation):
    class Arguments:
        input = ArticleInput(required=True)
        
    ok = graphene.Boolean()
    article = graphene.Field(ArticleType)
    
    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        article_instance = Article(
            title=input.title, 
            content=input.content,
            time=input.time
        )
        article_instance.save()
        return CreateArticle(
            ok=ok,
            article=article_instance,
        )


class Mutation(graphene.ObjectType):
    create_article = CreateArticle.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

# ref: https://ithelp.ithome.com.tw/articles/10235407

# GraphQL Syntex
## Query (Select)
### Query all articles:
# query {
#   articles {
# 		title,
# 		content,
#     time,
#   }
# }
### Query one article by id:
# query {
#   article(id: 1) {
#     title,
#     content,
#     time,
#   }
# }

## ----

## Mutation (Insert)
# mutation {
#    createArticle(input: {
#     title: "hello",
#     content: "grqphql",
#     time: "2019-06-28T05:00:00.000Z"
#   }) {
#       ok article { id title }
#   }
# }
