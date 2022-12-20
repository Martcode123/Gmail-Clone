import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="	https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png
          "
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDown className="header__input--caret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header;
