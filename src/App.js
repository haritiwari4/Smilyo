import "./App.css";
import Continents from "./containers/continents/Continents";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Countries from "./containers/countries/Countries";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="continents__container">
          <Switch>
            <Route path="/" exact component={Continents} />
            <Route path="/:id" component={Countries} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
