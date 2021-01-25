import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./index.scss";
import Register from "../../pages/register";
import Login from "../../pages/login";
import Modal from "@material-ui/core/Modal";
import ForgotPassword from "../../pages/forgot-password";
import VerifyEmail from "../../pages/verify-email";
import ResetPassword from "../../pages/reset-password";

const RegisterLogin = () => {
  //   const history = useHistory();
  // const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
  const [isVerifyMailOpen, setIsVerifyMailOpen] = useState(false);

  const handleSaveOtp=(otp)=>{
    console.log(otp, "otp2")
    setOtp(otp)
  }
  const handleSaveEmail=(email)=>{
    console.log(email, "email")
    setEmail(email);
  }
  const handleOpen = () => {
    setIsRegistrationOpen(true);
  };
  const handleClose = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsResetPasswordOpen(false);
    setIsVerifyMailOpen(false);
    //dispatch login sucess action
  };
  const handleLoginOpen = () => {
    console.log("hello")
    setIsLoginOpen(true);
    setIsRegistrationOpen(false);
    setIsForgotPasswordOpen(false);
    setIsResetPasswordOpen(false);
    setIsVerifyMailOpen(false);
  };
  const handleForgotPasswordOpen = () => {
    setIsForgotPasswordOpen(true);
    setIsLoginOpen(false);
    setIsResetPasswordOpen(false);
    setIsRegistrationOpen(false);
    setIsVerifyMailOpen(false);
  };
  const handleResetPasswordOpen = () => {
    setIsResetPasswordOpen(true);
    setIsVerifyMailOpen(false);
    setIsRegistrationOpen(false);
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
  };
  const handleVerifyMailOpen = () => {
    setIsVerifyMailOpen(true);
    setIsRegistrationOpen(false);
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsResetPasswordOpen(false);
  };
  const handleRegistrationOpen = () => {
    setIsRegistrationOpen(true);
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsResetPasswordOpen(false);
    setIsVerifyMailOpen(false);
  };

  return (
    <div>
      <div className="login-register-container" onClick={handleOpen}>
        Login / Register
      </div>
      <Modal
        open={
          isRegistrationOpen ||
          isLoginOpen ||
          isForgotPasswordOpen ||
          isResetPasswordOpen ||
          isVerifyMailOpen
        }
        onClose={handleClose}
      >
        <div>
          {isRegistrationOpen && (
            <Register onClose={handleClose}
            handleSaveEmail={handleSaveEmail}
            handleLoginOpen={handleLoginOpen} />
          )}
          {isLoginOpen && (
            <Login
              onClose={handleClose}
              handleRegistrationOpen={handleRegistrationOpen}
              handleForgotPasswordOpen={handleForgotPasswordOpen}
            />
          )}
          {isForgotPasswordOpen && (
            <ForgotPassword
              onClose={handleClose}
              email={email}
              // handleLoginOpen={handleLoginOpen}
              handleRegistrationOpen={handleRegistrationOpen}
              handleVerifyMailOpen={handleVerifyMailOpen}
            />
          )}
          {isVerifyMailOpen && (
            <VerifyEmail
            handleSaveOtp={handleSaveOtp}
              onClose={handleClose}
              handleResetPasswordOpen={handleResetPasswordOpen}
            />
          )}
          {isResetPasswordOpen && (
            <ResetPassword
            otp={otp}
              onClose={handleClose}
              handleLoginOpen={handleLoginOpen}
              // handleResetPasswordOpen={handleResetPasswordOpen}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default RegisterLogin;
