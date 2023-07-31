import { makeStyles } from "@mui/styles";
import React from "react";
import { colors } from "../../utils/constants";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.primary,
    color: "white",
    padding: 10,
    fontSize: 15,
    borderRadius: 16,
    boxShadow: "none",
    border: 0,
    fontFamily: "inherit",
    cursor: "pointer",
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const { className } = props;
  return (
    <button className={clsx(classes.root, className)}>{props.children}</button>
  );
};

export default Button;
