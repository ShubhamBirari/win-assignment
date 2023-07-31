import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../../components/card/TaskCard";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const List = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  return (
    <div>
      <p>Today Tasks</p>
      {tasksList.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default List;
