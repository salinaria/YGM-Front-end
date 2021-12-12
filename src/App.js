import React from "react";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Movie from "./components/moviePage/Movie";
import Home from "./components/HomePage/Home";
import Search from "./components/SearchPage/Search";

import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/ProfilePage/Profile";

const AccBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/auth">
          <AccBox>
            <AccountBox />
          </AccBox>
        </Route>

        <Route exact path="/movie/:id">
          <Movie />
        </Route>

        <Route exact path="/search">
          <Search />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
