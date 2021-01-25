import React, { useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import "./index.scss";
import { Images } from "../../assets/index";
import { Typography } from "@material-ui/core";
import { registerService } from "../../services/api-services";
import { InputAdornment } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import { loggedIn, loggedOut } from "../../action/user";
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; 
// import classes from "./style.module.css";

const fullNameRegex = "^[a-zA-Z]+(?:\\s[a-zA-Z]+)+$";
const emailRegex = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$";
const passwordRegex =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";

function Register(props) {
  const { register, errors, handleSubmit} = useForm();
  const [isLoading, setIsloading] = useState(false);
  const { loggedInAction } = props;
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () =>
    setUser({ ...user, showPassword: !user.showPassword });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { onClose, handleLoginOpen } = props;
  const { fullname, email, password } = user;

  const handleInputUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegistrationSucess = (response) => {
    props.handleSaveEmail(user.email);
    const token = response?.data?.jwt;
    localStorage.setItem("token", token);
    setIsloading(isLoading === false);  
    toaster.notify(<div style={{color:'green'}}>Form Submitted Successfully</div>,{
      duration: 1500
    })  
    loggedInAction();
    props.onClose();
  };

  const handleRegistrationError = (err) => {
    console.log("err", err);
  };

  const handleSubmitRegistration = (values) => {
    // console.log("user",user);
    setIsSubmitting(true);
    setIsloading(true);
    registerService(user)
      .then(handleRegistrationSucess)
      .catch(handleRegistrationError)
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <div className="register-page">
        <div className="register-container">
          <div className="register-content">
            <div className="register-div">
              <Typography className="register">Register</Typography>
              <hr />
              <img
                src={Images.CloseIcon}
                className="close-img"
                alt="Close Icon"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit(handleSubmitRegistration)}>
              <TextField
                label="Full Name"
                placeholder="Full Name"
                name="fullname"
                type="text"
                margin="normal"
                fullWidth
                autoFocus
                inputProps={{
                  pattern: fullNameRegex,
                }}
                required
                id="fullname"
                value={fullname}
                onChange={handleInputUser}
              />

              <TextField
                label="Email Address"
                placeholder="xyz@gmail.com"
                fullWidth
                required
                name="email"
                id="email"
                value={email}
                Ref={register({ required: true })}
                inputProps={{ pattern: emailRegex }}
                onChange={handleInputUser}
              />
              <TextField
                label="password"
                placeholder="*********"
                // type="password"
                type={user.showPassword ? "text" : "password"}
                fullWidth
                required
                name="password"
                id="password"
                value={password}
                onChange={handleInputUser}
                inputProps={{ pattern: passwordRegex }}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <div
                        className="showPassword"
                        // aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {user.showPassword ? <h5>Hide</h5> : <h5>Show</h5>}
                      </div>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="checkbox-password">
                By registering you agree to our{" "}
                <div className="termsAndConditions"> Terms & Conditions</div>
              </div>
              <button
                type="primary"
                // htmltype="submit"
                className="login-btn"
                disabled={isSubmitting}
                // onClick={handleSubmitRegistration}
              >
                Register
              </button>
              {isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: 100,
                    top: 80,
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
            <div className="registration-container">
              <button className="registration-btn" onClick={handleLoginOpen}>
                Existing User? Log In
              </button>
              <div className="login-options">
                <div className="continue">Or Continue with</div>
                <div className="google-image">
                  <img
                    src={Images.GoogleIcon}
                    className="google-img"
                    alt="Google Icon"
                  />
                  <div
                    onClick={() => window.open("http://www.google.com")}
                    className="google"
                  >
                    Google
                  </div>
                </div>
                <div className="google-image">
                  <img
                    src={Images.FacebookIcon}
                    className="google-img"
                    alt="Facebook Icon"
                  />
                  <div
                    onClick={() => window.open("http://www.facebook.com")}
                    className="google"
                  >
                    Facebook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggedInAction: () => dispatch(loggedIn()),
  };
};

export default connect(null, mapDispatchToProps)(Register);
