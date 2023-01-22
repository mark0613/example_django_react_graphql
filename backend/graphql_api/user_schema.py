from django.contrib.auth import get_user_model

import graphene
from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class UserInput(graphene.InputObjectType):
    email = graphene.String(required=True)
    username = graphene.String(required=True)
    password = graphene.String(required=True)


class UserQuery(graphene.ObjectType):
    user = graphene.Field(UserType, id=graphene.Int())
    users = graphene.List(UserType)

    def resolve_user(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return get_user_model().objects.get(pk=id)

    def resolve_users(self, info):
        return get_user_model().objects.all()


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)
    ok = graphene.Boolean()

    class Arguments:
        input = UserInput(required=True)

    @staticmethod
    def mutate(self, info, input):
        ok = True
        user = get_user_model()(
            username=input.username,
            email=input.email,
        )
        user.set_password(input.password)
        user.save()
        return CreateUser(ok=ok, user=user)


class UserMutation(graphene.ObjectType):
    create_user = CreateUser.Field()


# query {
#   users {
#     id,
#     email,
#     username,
#   }
# }
###
# mutation {
#   createUser(input: {
#     email: "Test@mail.com",
#     username: "Test",
#     password: "aabbcc123",
#   }) {
#     ok user { id, username, email }
#   }
# }
