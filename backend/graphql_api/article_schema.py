import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from graphql_jwt.decorators import login_required

from article.models import Article
from article.services import ArticleService


article_service = ArticleService()


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article


class ArticleInput(graphene.InputObjectType):
    title = graphene.String()
    content = graphene.String()
    time = graphene.DateTime()


class ArticleQuery(ObjectType):
    article = graphene.Field(ArticleType, id=graphene.Int(), title=graphene.String())
    articles = graphene.List(ArticleType)

    def resolve_article(self, info, **kwargs):
        id = kwargs.get('id')
        title = kwargs.get('title')
        return article_service.get_article(id=id, title=title)

    def resolve_articles(self, info, **kwargs):
        return article_service.get_all_articles()


class CreateArticle(graphene.Mutation):
    class Arguments:
        input = ArticleInput(required=True)
        
    ok = graphene.Boolean()
    article = graphene.Field(ArticleType)
    
    @staticmethod
    @login_required
    def mutate(root, info, input=None):
        ok = True
        article_instance = Article(
            title=input.title, 
            content=input.content,
            time=input.time
        )

        article_service.create_article(article_instance)
        return CreateArticle(
            ok=ok,
            article=article_instance,
        )


class ArticleMutation(graphene.ObjectType):
    create_article = CreateArticle.Field()


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
