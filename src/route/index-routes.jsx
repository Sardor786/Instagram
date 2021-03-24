import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "../components/details/loading2";

const Header = React.lazy(() => import("../components/Header"));
const Home = React.lazy(() => import("../components/Home"));
const Explore = React.lazy(() => import("../components/Explore"));
const Profile = React.lazy(() => import("../components/Profile"));
const Direct = React.lazy(() => import("../components/Direct"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  );
}

export default App;
