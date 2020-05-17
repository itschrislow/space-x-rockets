import '../styles/styles.sass'

// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />
// } 

import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
          <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);