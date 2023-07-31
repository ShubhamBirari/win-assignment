import React from "react";
import Input from "../../components/input/Input";
import { makeStyles } from "@mui/styles";
import TextArea from "../../components/input/TextArea";
import clsx from "clsx";
import Button from "../../components/button/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    boxSizing: "border-box",
    padding: 32,
    fontSize: 16,
    border: "none",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.25)",
    borderRadius: 9,
    marginBottom: 35,
  },
  input: {
    height: 85,
  },
  textarea: {
    height: 178,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
  },
  submit: {
    width: 178,
  },
}));

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <p>Add Task</p>
      <form>
        <Input
          className={clsx(classes.form, classes.input)}
          placeholder="Title"
        />
        <TextArea
          className={clsx(classes.form, classes.textarea)}
          placeholder="Description"
        />
        <div className={classes.btn}>
          <Button className={classes.submit}>Submit</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
