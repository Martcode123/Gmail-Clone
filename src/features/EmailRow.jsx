import { Checkbox, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice"

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
  };
  return (
    <div onClick={() => {navigate("/mail"); openMail()}}  className="email__row">
      <div className="email__row--options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="email__row--title">{title}</h3>

      <div className="email__row--message">
        <h4>
          {subject}{" "}
          <span className="email__row--description">-{description}</span>
        </h4>
      </div>

      <p className="email__row--time">{time}</p>
    </div>
  );
}

export default EmailRow;
