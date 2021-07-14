import React from "react";
import { History } from "history";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Toolbar,
  Button,
} from "@material-ui/core";

interface AppBarProps {
  onOmOss: () => any;
  history: History<any>;
}

const AppBar: React.FC<AppBarProps> = ({ onOmOss, history }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.Toolbar}>
        <Button variant="contained" onClick={onOmOss}>
          Om oss
        </Button>
        <Typography className={classes.Header}>Hybridarevyen 2022</Typography>
      </Toolbar>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Toolbar: {
      backgroundColor: "#0A36AF",
      position: "static",
      boxShadow: "0px 4px 5px -5px",
      marginBottom: theme.spacing(0.2),
    },
    Header: {
      fontFamily: "-apple-system",
      fontSize: "200%",
      color: "#fff",
      width: "100%",
      textAlign: "center",
      fontWeight: 550,
      marginRight: "10%",
    },
  })
);

export default AppBar;
