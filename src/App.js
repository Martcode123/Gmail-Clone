import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./features/Header";
import SideBar from "./features/Sidebar";
import Mail from "./features/Mail";
import EmailList from "./features/EmailList";
import SendMail from "./features/SendMail";
import { useDispatch, useSelector } from "react-redux";
import Login from "./features/Login";
import { auth } from "./features/firebase";
import { login } from "./features/userSlice";
function App() {
  const sendMessageIsOpen = useSelector(
    (state) => state.mail.sendMessageIsOpen
  );
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch
        (login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <SideBar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route exact path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
