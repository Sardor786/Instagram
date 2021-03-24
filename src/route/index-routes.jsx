import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import Home from "../components/Home";
import Explore from "../components/Explore";
import Profile from "../components/Profile";
import Direct from "../components/Direct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact>
          <Header />
          <Home />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/direct`} exact>
          <Header />
          <Direct />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/explore`} exact>
          <Header />
          <Explore />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/profile`} exact>
          <Header />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
