import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Direct from "./components/Direct";

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
