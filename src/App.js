import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AccBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:50px;
`;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <AccBox>
              <AccountBox />
            </AccBox>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
