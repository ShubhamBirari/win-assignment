import React from "react";
import Input from "../../components/input/Input";
import { makeStyles } from "@mui/styles";
import TextArea from "../../components/input/TextArea";
import clsx from "clsx";
import Button from "../../components/button/Button";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/task";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    boxSizing: "border-box",
    padding: 32,
    fontSize: 16,
    border: "none",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.25)",
    borderRadius: 9,
  },
  inputGrp: {
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
  error: {
    fontSize: 14,
    color: "red",
  },
}));

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addTask(data));
  };

  return (
    <>
      <p>Add Task</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={classes.inputGrp}>
              <Input
                {...field}
                className={clsx(classes.form, classes.input)}
                placeholder="Title"
              />
              {errors.title && (
                <p className={classes.error}>Title is required</p>
              )}
            </div>
          )}
        />

        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={classes.inputGrp}>
              <TextArea
                {...field}
                className={clsx(classes.form, classes.textarea)}
                placeholder="Description"
              />
              {errors.description && (
                <p className={classes.error}>Description is required</p>
              )}
            </div>
          )}
        />

        <div className={classes.btn}>
          <Button className={classes.submit} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
