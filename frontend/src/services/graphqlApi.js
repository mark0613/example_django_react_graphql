import { request, gql } from 'graphql-request';
import { Cookie } from "../utils/cookie";


const url = process.env.REACT_APP_GRAPHQL_API;
const variables = {};
const headers = {
    'Authorization': `JWT ${Cookie.get('token')}`,
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

    return request(url, query);
};

export const sendCreateArticleRequest = ({title, content, time}) => {
    const query = gql`
    mutation {
        createArticle(input: {
            title: "${title}",
            content: "${content}",
            time: "${time}"
        }) {
            ok article { id title }
        }
    }
    `;

    return request(url, query, variables, headers);
}

export const sendLoginRequest = ({username, password}) => {
    const query = gql`
    mutation {
        tokenAuth(username: "${username}", password: "${password}") {
          token
        }
    }
    `;

    return request(url, query);
};
