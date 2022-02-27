import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import Home from "./screens/Home";
import OmOss from "./screens/OmOss";

export interface defaultProps extends RouteComponentProps {}

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/OmOss" exact render={(props) => <OmOss {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
