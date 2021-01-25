import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Loader from "react-loader-spinner";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./index.scss";
import { Images } from "../../assets/index";
import { forgotPasswordService } from "../../services/api-services";
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; 

const emailRegex = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$";

function ForgotPassword(props) {
  // const history = useHistory();
  // const { register, errors, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [user, setUser] = useState({
    email: "",
  });
  const {
    onClose,
    handleLoginOpen,
    // handleVerifyMailOpen,
    handleRegistrationOpen,
  } = props;

  const handleInputUser = (e) => {
    console.log("user",user,e.target,e.target.value,e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleForgotSucess = (response) => {
    // debugger;
    toaster.notify(<div style={{color:'green'}}>OTP Has Been Sent To Your Registerd Email Id</div>,{
      duration: 1500
    })
    // const token = response?.data?.jwt;
    // localStorage.setItem("token", token);
    props.onClose();
    // console.log("token",response.token);
    // history.push('/verify-email')
props.handleVerifyMailOpen();
    console.log(response);
    
  };

  const handleForgotError = (err) => {
    console.log("err", err);
  };
  // const email = localStorage.getItem("emailID");
  const handleSubmitForgot = (values) => {
    console.log("user", user);
    setIsSubmitting(true);
    setIsloading(true);
    forgotPasswordService(user.email)
      .then(handleForgotSucess)
      .catch(handleForgotError)
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <div className="forgot-password-page">
        <div className="forgot-password-container">
          {/* <form> */}
            <div className="forgot-password-content">
              <div className="forgot-password-div">
                <div className="forgot-password">Forgot Password</div>
                <hr />
                <img
                  src={Images.CloseIcon}
                  className="close-img"
                  alt="close Icon"
                  onClick={onClose}
                />
              </div>
              <p>
                Enter your email associated with your account and we will send a
                4 digit code to verify you account.
              </p>
              <form>
                <TextField
                  label="Email Address"
                  placeholder="sourabh.k@rejolut.com"
                  // fullWidth
                  name="email"
                  onChange={handleInputUser}
                  required
                  // value={ForgotPassward}
                  inputProps={{ pattern: emailRegex }}
                />
                <button
                  type="button"
                  className="send-btn"
                  // fullWidth
                  disabled={isSubmitting}
                  onClick={handleSubmitForgot}
                >
                  Send
                </button>
                {isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: 100,
                    top: 90,
                    position: "absolute",
                  }}
                >
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={450}
                    width={100}
                    timeout={15000} //3 secs
                  />
                </div>
              ) : null}
              </form>
              <div className="remember-login-container">
                <h4>Remember Password?</h4>
                <h3 onClick={handleLoginOpen}>Login</h3>
              </div>
              <div className="register-container">
                <button
                  className="register-btn"
                  // fullWidth
                  onClick={handleRegistrationOpen}
                >
                  New User? Register
                </button>
                <div className="login-options">
                  <div className="continue">Or Continue with</div>
                  <div className="google-image">
                    <img
                      src={Images.GoogleIcon}
                      className="google-img"
                      alt=""
                    />
                    <div className="google">Google</div>
                  </div>
                  <div className="google-image">
                    <img
                      src={Images.FacebookIcon}
                      className="google-img"
                      alt=""
                    />
                    <div className="google">Facebook</div>
                  </div>
                </div>
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
