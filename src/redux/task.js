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
    setSearch: (state, action) => {
      state.search = action.payload;
      state.pageNo = 0;
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    deleteTask: (state, action) => {
      const { tasksList } = JSON.parse(JSON.stringify(state));
      state.tasksList = [
        ...tasksList.filter((item) => item.id != action.payload.id),
      ];
    },
    addTask: (state, action) => {
      state.tasksList = [
        { ...action.payload, id: Math.round(Math.random() * 1000) },
        ...state.tasksList,
      ];
    },
  },
});

export const {
  addTask,
  setLoader,
  selectItem,
  deleteTask,
  setSearch,
  setPageNo,
} = tasksSlice.actions;
export default tasksSlice.reducer;
