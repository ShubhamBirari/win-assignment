import { makeStyles } from "@mui/styles";
import React from "react";
import Button from "../button/Button";
import DeleteIcon from "../../assets/delete_icon.svg";
import { colors } from "../../utils/constants";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

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
  },
  cardLeft: {
    display: "flex",
  },
  cardRight: {
    display: "flex",
    marginRight: 32,
  },
  btn: {
    margin: "0px 12px",
    minWidth: 60,
    borderRadius: 24,
  },
  deleteBtn: {
    margin: "0px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.deleteBackgroundColor,
    padding: 12,
    borderRadius: "50%",
  },
  deleteIcon: {
    height: 24,
    width: 24,
  },
}));

const TaskCard = ({ task }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <div className={classes.cardLeft}>
        {/* <div>Checkbox</div> */}
        <span>{task.title}</span>
      </div>
      <div className={classes.cardRight}>
        <Button className={classes.btn}>Edit</Button>
        <Button className={classes.btn} onClick={() => navigate("/view")}>
          View
        </Button>
        <Button className={clsx(classes.deleteBtn)}>
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
