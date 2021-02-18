import React from "react";
import { ApolloProvider } from "@apollo/client";
import styled from "styled-components";
import client from "./gql";
import Characters from "./components/Characters";

const Wrapper = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <Characters />
      </Wrapper>
    </ApolloProvider>
  );
}

export default App;
