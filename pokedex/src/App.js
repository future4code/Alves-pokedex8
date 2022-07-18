import React from "react";
import { Router } from "./Routes/Router";
import Card from "./Components/Card";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}
body{ 
  height:100vh;
  width:100vw;
}
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
