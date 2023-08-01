import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [],
    loader: true,
    selected: null,
    search: null,
    pageNo: 0,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selected = { ...action.payload };
    },
    selectedFilters: (state, action) => {
      if (action.payload === null) {
        state.filters = {
          edp: "",
        };
      } else {
        state.filters = action.payload;
      }
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    deleteTask: (state, action) => {
      const { tasksList } = JSON.parse(JSON.stringify(state));
      state.tasksList = [
        ...tasksList.filter((item) => item.id != action.payload.id),
      ];
    },
    addTask: (state, action) => {
      let list = JSON.parse(JSON.stringify(state)).tasksList;
      list.unshift({ ...action.payload, id: Math.round(Math.random() * 10000000) });
      state.tasksList = [...list];
    },
    editTask: (state, action) => {
      const { tasksList } = JSON.parse(JSON.stringify(state));
      let list = [];
      tasksList.forEach((item) => {
        if (item.id === action.payload.id) {
          item = { ...action.payload };
        }
        list.push(item);
      });

      state.tasksList = [...list];
    },
  },
});

export const { addTask, editTask, setLoader, selectItem, deleteTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
