import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(({ initialState }) =>
    new ApolloClient({
      uri: 'http://localhost:4444/graphql',
      cache: new InMemoryCache().restore(initialState || {})
    })
);