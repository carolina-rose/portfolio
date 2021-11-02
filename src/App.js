import {Fragment} from 'react';
import "./App.css";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Switch>
      <Route exact path="/">
        <Redirect to="/homepage" />
      </Route>
      <Route path="/homepage">Strona Główna</Route>
      <Route path="/about">O mnie</Route>
      <Route path="/projects">Projekty</Route>
      <Route path="/contact">Kontakt</Route>
      <Route path="*">Nie znaleziono strony</Route>
      </Switch>
    </Fragment>
  );
}

export default App;
