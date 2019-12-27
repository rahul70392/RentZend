import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
// import { onError } from 'apollo-link-error';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql/',
        // onE:({networkError, graphQLErrors}) => {
        //     console.log('network error', networkError)
        //     console.log('graphql error', graphQLErrors)
        // },
        fetchOptions:true,
    })
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
