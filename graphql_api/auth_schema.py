import graphene
import graphql_jwt


class AuthMutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


# ref: https://www.howtographql.com/graphql-python/4-authentication/

# mutation {
#   tokenAuth(username: "Test", password: "aabbcc123") {
#     token,
#     payload,
#   }
# }
