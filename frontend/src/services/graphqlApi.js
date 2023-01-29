import { request, gql } from 'graphql-request';


const baseUrl = process.env.REACT_APP_GRAPHQL_API;

const graphqlBaseQuery = (baseUrl, query) => {
    return request(baseUrl, query);
};

export const fetchAllArticles = () => {
    const query = gql`
    query {
        articles {
            title,
            content,
            time,
        }
      }      
    `;

    return graphqlBaseQuery(baseUrl, query);
};

export const sendLoginRequest = ({username, password}) => {
    const query = gql`
    mutation {
        tokenAuth(username: "${username}", password: "${password}") {
          token
        }
    }
    `;

    return graphqlBaseQuery(baseUrl, query);
};
