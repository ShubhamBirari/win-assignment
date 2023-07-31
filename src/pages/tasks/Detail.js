import React from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/left_arrow_icon.svg";
import DeleteIcon from "../../assets/delete_icon.svg";
import EditIcon from "../../assets/edit_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, selectItem } from "../../redux/task";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 32,
    fontSize: 16,
    marginTop: 60,
  },
  title: {
    fontWeight: 700,
    marginBottom: 24,
  },
  description: {
    marginBottom: 80,
    width: 726,
  },
  btnContainer: {
    display: "flex",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    height: 34,
    width: 34,
    marginRight: 8,
  },
  icon: {
    height: 16,
    width: 16,
  },
  btnGroup: {
    display: "flex",
    alignItems: "center",
    marginRight: 32,
  },
  bgBlack: {
    backgroundColor: "black",
  },
  bgRed: {
    backgroundColor: "rgba(255, 0, 0, 1)    ",
  },
}));

const Detail = () => {
  const { selected } = useSelector((state) => state.tasks);
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.root}>
        <p className={classes.title}> Title : {selected?.title}</p>
        <p className={classes.description}>
          {" "}
          Description : {selected?.description}
        </p>
        <div className={classes.btnContainer}>
          <div className={classes.btnGroup}>
            <Button
              className={clsx(classes.btn, classes.bgBlack)}
              onClick={() => {
                dispatch(selectItem(null));
                navigate("/");
              }}
            >
              <img src={LeftArrow} alt="left_arrow" className={classes.icon} />
            </Button>
            Back
          </div>
          <div className={classes.btnGroup}>
            <Button className={classes.btn} onClick={() => navigate("/add")}>
              <img src={EditIcon} alt="left_arrow" className={classes.icon} />
            </Button>
            Edit
          </div>
          <div className={classes.btnGroup}>
            <Button
              className={clsx(classes.btn, classes.bgRed)}
              onClick={() => {
                dispatch(deleteTask(selected));
                dispatch(selectItem(null));
                navigate("/");
              }}
            >
              <img
                src={DeleteIcon}
                alt="detele_icon"
                className={classes.icon}
              />
            </Button>
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
