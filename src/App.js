// import logo from "./assets/launch.png";
// import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Homepage from "./components/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            About
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
