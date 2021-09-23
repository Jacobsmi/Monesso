import {BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
