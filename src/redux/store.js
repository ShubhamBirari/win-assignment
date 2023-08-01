import { configureStore } from "@reduxjs/toolkit";
import tasks from "./task";
import users from "./user";

export const store = configureStore({
  reducer: { tasks, users },
});
