import React from "react";
import { Router } from "./Routes/Router";
import Card from "./Components/Card";
import { createGlobalStyle } from "styled-components";
import GlobalState from "./Components/Global/GlobalState";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}
body{ 
  height:100vh;
  width:100vw;
  background:#27282c
}
`

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
