import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/"><Redirect path="/homepage" /></Route>
      <Route path="/homepage">Strona Główna</Route>
      <Route path="/about">O mnie</Route>
      <Route path="/projects">Projekty</Route>
      <Route path="/contact">Kontakt</Route>
      <Route path="*">Nie znaleziono strony</Route>
    </Switch>
  );
}

export default App;
