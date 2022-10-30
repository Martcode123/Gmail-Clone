import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption'

function SideBar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<EditIcon fontSize="Large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title='Inbox' number={54} />
    </div>
  );
}

export default SideBar;
