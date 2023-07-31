import React, { useEffect } from "react";
import Input from "../../components/input/Input";
import { makeStyles } from "@mui/styles";
import TextArea from "../../components/input/TextArea";
import clsx from "clsx";
import Button from "../../components/button/Button";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, selectItem } from "../../redux/task";
import { useNavigate } from "react-router-dom";

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

const Form = ({ type }) => {
  const classes = useStyles();
  const { selected } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    if (selected) {
      dispatch(editTask({ ...data, id: selected.id }));
      dispatch(selectItem(null));
    } else dispatch(addTask(data));

    navigate("/");
  };

  useEffect(() => {
    if (selected) {
      setValue("title", selected.title);
      setValue("description", selected.description);
    }
  }, []);

  return (
    <>
      <p> {selected ? "Edit " : "Add "} Task</p>
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
