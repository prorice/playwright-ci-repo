import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri는 추후 개발서버가 정해지면, 그때 구분값으로 지정
  uri: 'http://localhost:3000/graphql',
});
