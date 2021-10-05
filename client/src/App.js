import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Login,
  Marcas,
  Modelos,
  TipoCombustible,
  TipoVehiculo,
  Vehiculos,
} from "./pages";
import { NavbarComponent } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Fragment>
          <NavbarComponent />
          <div className="container" computedmatch="">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/marcas" component={Marcas}></Route>
            <Route
              exact
              path="/tipoCombustible"
              component={TipoCombustible}
            ></Route>
            <Route exact path="/tipoVehiculo" component={TipoVehiculo}></Route>
            <Route exact path="/modelos" component={Modelos}></Route>
            <Route exact path="/vehiculos" component={Vehiculos}></Route>
          </div>
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
