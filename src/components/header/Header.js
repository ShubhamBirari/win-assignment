import React from "react";
import Logo from "./../../assets/logo.svg";
import AddTask from "./../../assets/add_task_icon.svg";
import { colors } from "../../utils/constants";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.primary,
    height: "calc(135px - 24px - 24px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 48px",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100px - 24px - 24px)",
      padding: 16,
    },
  },
  image: {
    height: 56,
    width: 122,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: 86,
    },
  },
  profile_image: {
    width: 68,
    height: 68,
    borderRadius: 34,
    paddingRight: 16,

    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 40,
      paddingRight: 8,
    },
  },
  nav_right: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    margin: "0 32px",
    color: "#fff",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      margin: "0 16px",
    },
  },
  add_task_icon: {
    marginRight: 16,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginRight: 8,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const { userDetail } = useSelector((state) => state.users);
  const { name, picture } = userDetail.results[0];
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.root}>
        <img
          src={Logo}
          alt="logo"
          className={classes.image}
          onClick={() => navigate("/")}
        />
        <div className={classes.nav_right}>
          <img
            src={AddTask}
            alt="add_task_image"
            className={classes.add_task_icon}
            onClick={() => navigate("/add")}
          />

          <div className={classes.profile}>
            <img src={picture.thumbnail} className={classes.profile_image} />
            <span>
              {name.first} {name.last}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
