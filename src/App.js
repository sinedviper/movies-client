import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import Tabs from "./components/Tabs/Tabs";
import theme from "./components/theme";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Tabs />
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
