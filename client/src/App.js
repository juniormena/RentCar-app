import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Route exact path="/" component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
