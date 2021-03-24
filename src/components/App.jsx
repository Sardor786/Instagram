import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Explore from "./Explore";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Direct from "./Direct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>

        <Route path="/direct" exact>
          <Header />
          <Direct />
        </Route>

        <Route path="/explore" exact>
          <Header />
          <Explore />
        </Route>

        <Route path="/Profile" exact>
          <Header />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
