import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps
} from "react-router-dom";
import Home from "./screens/Home";
import OmOss from "./screens/OmOss";
import Undergrupper from "./screens/Undergrupper";
import Footer from "./components/footer/Footer";
import Program from "./screens/Program";
import Images from "./screens/Images";
import Styret from "./screens/Styret";
import NavBar from "./components/NavBar";

export interface defaultProps extends RouteComponentProps {}

const App: React.FC = () => {
  return (
    <div>
      <head className="head">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Hybridarevyen 2022</title>
      </head>

      <div className="">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <div className={"content-wrap"}>
          <NavBar />
          <BrowserRouter>
            <Switch>
              <Route path="/" exact render={props => <Home {...props} />} />
              <Route
                path="/Undergrupper"
                exact
                render={props => <Undergrupper {...props} />}
              />
              <Route
                path="/OmOss"
                exact
                render={props => <OmOss {...props} />}
              />
              <Route
                path="/Program"
                exact
                render={props => <Program {...props} />}
              />
              <Route
                path="/Styret"
                exact
                render={props => <Styret {...props} />}
              />
              <Route
                path="/Bilder"
                exact
                render={props => <Images {...props} />}
              />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
