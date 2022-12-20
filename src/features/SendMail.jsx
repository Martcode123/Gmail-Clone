import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./mailSlice";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  

  return (
    <div className="send__mail">
      <div className="send__mail--header">
        <h3>New Message</h3>
        <CloseIcon className="send__mail--close" onClick={() => dispatch(closeSendMessage())}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send__mail--error">To is required</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="send__mail--error">Subject is required</p>
        )}

        <input
          {...register("message", { required: true })}
          name="message"
          placeholder="Message..."
          type="text"
          className="send__mail--message"
        />
        {errors.message && (
          <p className="send__mail--error">Message is required</p>
        )}

        <div className="send__mail--options">
          <Button
            className="send__mail--button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
