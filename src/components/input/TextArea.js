import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TextArea = (props) => {
  const { className } = props;
  const classes = useStyles();
  return <textarea className={clsx(classes.root, className)} {...props} />;
};

export default TextArea;
