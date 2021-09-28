import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, Marcas } from "./pages";
import { NavbarComponent } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <div className="container">
          <NavbarComponent />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/marcas" component={Marcas}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
