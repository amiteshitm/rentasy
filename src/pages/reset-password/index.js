import React, { useState } from "react";
// import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./index.scss";
import { Images } from "../../assets/index";
import { resetPassword } from "../../services/api-services";
import PropTypes from "prop-types";

function ResetPassword(props) {
  const { onClose } = props;
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const { newPassword, confirmPassword } = password;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputPassword = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
    // console.log("fullname", username);
    // console.log("targetvalue", e.target.value);
  };
  const handlePasswordResetSucess = (response) => {
    const token = response?.data?.jwt;
    localStorage.setItem("token", token);
    props.handleLoginOpen();
    // props.handleSaveOtp(otp);
    // onClose();
  };

  const handlePasswordResetError = (err) => {
    console.log("err", err);
  };

  const otp = localStorage.getItem("emailOtp");

  const handleSubmitPasswordReset = (values) => {
    // console.log("password", password, otp);
    //  props.handleSubmitVerifyEmail()
    // if(password.newPassword===password.confirmPassword){
      
    setIsSubmitting(true);
    resetPassword(password, otp)
      .then(handlePasswordResetSucess)
      .catch(handlePasswordResetError)
      .finally(() => {
        setIsSubmitting(false);
      });
      
    // }
    // else "please Enter correct Password"
  };

  return (
    <>
      <div className="new-password-page">
        <div className="new-password-container">
          <div className="new-password-content">
            <div className="test">
              <div className="new-password-div">
                <div className="new-password">New Password</div>
                <hr />
                <img
                  src={Images.CloseIcon}
                  className="close-img"
                  alt="close Icon"
                  onClick={onClose}
                />
              </div>
              <p className="enter-pass">
                Enter the new password that shouldn’t match with the old one.
              </p>
              <form>
                <TextField
                  name="newPassword"
                  label="New Password"
                  placeholder="**********"
                  type="password"
                  value={newPassword}
                  required
                  onChange={handleInputPassword}
                />
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="*********"
                  type="password"
                  value={confirmPassword}
                  required
                  onChange={handleInputPassword}
                />
                <div className="submit-btn-div">
                  <button
                    className="submit-btn"
                    onClick={handleSubmitPasswordReset.bind()}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>

                  <p className="after-click">
                    After clicking submit you will redirect to login page
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
