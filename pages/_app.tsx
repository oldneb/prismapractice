import "../styles/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import  client  from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  return (
   
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
   
  );
}

export default MyApp;