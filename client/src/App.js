import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Clientes,
  Empleados,
  Home,
  Login,
  Marcas,
  Modelos,
  TipoCombustible,
  TipoVehiculo,
  Vehiculos,
} from "./pages";
import { NavbarComponent, ProtectedRoute } from "./components";
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
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/marcas" component={Marcas} />
            <ProtectedRoute
              exact
              path="/tipoCombustible"
              component={TipoCombustible}
            />
            <ProtectedRoute
              exact
              path="/tipoVehiculo"
              component={TipoVehiculo}
            />
            <ProtectedRoute exact path="/modelos" component={Modelos} />
            <ProtectedRoute exact path="/vehiculos" component={Vehiculos} />
            <ProtectedRoute exact path="/clientes" component={Clientes} />
            <ProtectedRoute exact path="/empleados" component={Empleados} />
          </div>
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
