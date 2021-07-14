import React from "react";
import AppBar from "../components/AppBar";
import { History } from "history";

interface Props {
  history: History<any>;
}

const Home: React.FC<Props> = ({ history }) => {
  return (
    <div>
      <AppBar onOmOss={() => history.push("/OmOss")} history={history}></AppBar>
    </div>
  );
};

export default Home;
