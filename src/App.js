import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import List from "./pages/tasks/List";
import { makeStyles } from "@mui/styles";
import { colors } from "./utils/constants";
import Form from "./pages/tasks/Form";
import Detail from "./pages/tasks/Detail";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px 98px",
    display: "block",
    textAlign: "start",
    backgroundColor: colors.defaultBackgroundColor,
    boxSizing: "border-box",
    height: "calc(100vh - 135px)",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.container}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Form />} />
          <Route path="/view" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
