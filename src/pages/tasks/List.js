import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../../components/card/TaskCard";
import { colors } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  noTask: {
    padding: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.defaultBackgroundColor,
  },
}));

const List = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const classes = useStyles();
  return (
    <div>
      <p>Today Tasks</p>
      {tasksList.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
      {tasksList.length === 0 && (
        <p className={classes.noTask}>There are no tasks to display !</p>
      )}
    </div>
  );
};

export default List;
