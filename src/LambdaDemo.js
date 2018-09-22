import React from 'react';

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql'
});

export default () => (
  <ApolloProvider client={client}>
    <Query query={query}>
      {({ data }) => (
        <div>
          A greeting from the server: {data.hello}
          <br />
          <img src={data.dogPhotoUrl} alt="Dog" />
        </div>
      )}
    </Query>
  </ApolloProvider>
);

const query = gql`
  {
    hello
    dogPhotoUrl
  }
`;
