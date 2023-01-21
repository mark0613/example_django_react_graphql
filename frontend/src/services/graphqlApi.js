import { request, gql } from 'graphql-request';


const baseUrl = '/graphql/';

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
