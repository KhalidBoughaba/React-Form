import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route exact path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
