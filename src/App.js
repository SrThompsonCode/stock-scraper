import logo from "./logo.svg";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>

      {/* <NavBar /> */}
      {/* <Body /> */}
    </React.Fragment>
  );
}

export default App;
