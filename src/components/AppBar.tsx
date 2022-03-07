import React from "react";
import { History } from "history";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Toolbar,
  Button,
  Paper
} from "@material-ui/core";
//import HomeIcon from "@material-ui/icons";
import Revylogo from "../SDoneline.png";

interface AppBarProps {
  onOmOss: () => any;
  history: History<any>;
  //onHome: () => any;
}

const AppBar: React.FC<AppBarProps> = ({ onOmOss, history }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.Toolbar}>
        {/*<Button variant="contained" className={classes.Button}>
          <HomeIcon onClick={OnHome}></HomeIcon>
          </Button>*/}
        {/*<Button variant="contained" onClick={onOmOss}>
          Om oss
        </Button>*/}
        <Paper className={classes.header} elevation={0}>
          <img src={Revylogo} alt="test"></img>
        </Paper>
      </Toolbar>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Toolbar: {
      backgroundColor: "#01529d",
      position: "static",
      boxShadow: "0px 4px 5px -5px",
      marginBottom: theme.spacing(0.2)
    },
    Button: {},
    header: {
      margin: "auto",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  })
);

export default AppBar;
