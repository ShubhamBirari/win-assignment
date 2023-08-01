import { makeStyles } from "@mui/styles";
import React from "react";
import Button from "../button/Button";
import DeleteIcon from "../../assets/delete_icon.svg";
import { colors } from "../../utils/constants";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { deleteTask, selectItem } from "../../redux/task";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: 72,
    display: "flex",
    alignItems: "center",
    padding: 18,
    boxSizing: "border-box",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.25)",
    borderRadius: 9,
    justifyContent: "space-between",
    marginBottom: 24,
    [theme.breakpoints.down("sm")]: {
      padding: "14px 10px",
      height: 52,
    },
  },
  cardLeft: {
    display: "flex",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  cardRight: {
    display: "flex",
    marginRight: 32,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  btn: {
    margin: "0px 12px",
    minWidth: 60,
    borderRadius: 24,
    [theme.breakpoints.down("sm")]: {
      minWidth: 40,
      fontSize: 12,
      margin: "0px 4px",
    },
  },
  deleteBtn: {
    margin: "0px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.deleteBackgroundColor,
    padding: 12,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      padding: 8,
      margin: "0px 6px",
    },
  },
  deleteIcon: {
    height: 24,
    width: 24,
    [theme.breakpoints.down("sm")]: {
      height: 18,
      width: 18,
    },
  },
}));

const TaskCard = ({ task }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <div className={classes.cardLeft}>
        {/* <div>Checkbox</div> */}
        <span>{task.title}</span>
      </div>
      <div className={classes.cardRight}>
        <Button
          className={classes.btn}
          onClick={() => {
            console.log(task);
            dispatch(selectItem(task));
            navigate("/add");
          }}
        >
          Edit
        </Button>
        <Button
          className={classes.btn}
          onClick={() => {
            dispatch(selectItem(task));
            navigate("/view");
          }}
        >
          View
        </Button>
        <Button
          className={clsx(classes.deleteBtn)}
          onClick={() => dispatch(deleteTask(task))}
        >
          <img
            src={DeleteIcon}
            alt="detele_icon"
            className={classes.deleteIcon}
          />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
