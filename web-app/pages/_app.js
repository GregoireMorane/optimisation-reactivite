import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import withApolloClient from "../with-apollo-client";
import { ApolloProvider } from "react-apollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <Head>
          <title>Next.js app</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
