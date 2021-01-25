import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./index.scss";
import { Images } from "../../assets/index";
import { loginService } from "../../services/api-services";
import { InputAdornment } from "@material-ui/core";
import { loggedIn, loggedOut } from "../../action/user";
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; 
import { useForm } from "react-hook-form";
import { CenterFocusStrong } from "@material-ui/icons";

const emailRegex = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$";
const passwordRegex =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";

function Login(props) {
  const { register, errors, handleSubmit } = useForm();
  const [isLoading, setIsloading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginUser, setLoginUser] = useState({
    identifier: "",
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () =>
    setLoginUser({ ...loginUser, showPassword: !loginUser.showPassword });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { loggedInAction } = props;

  const { onClose, handleRegistrationOpen, handleForgotPasswordOpen } = props;
  const { identifier, password } = loginUser;

  const handleInputUser = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    // console.log("fullname", username);
    // console.log("targetvalue", e.target.value);
  };

  const handleLoginSucess = (response) => {
    setIsloading(true)
    // <h1>gsf</h1>
    const token = response?.data?.jwt;
    localStorage.setItem("token", token);
    // eslint-disable-next-line eqeqeq
    setIsloading(false);
    toaster.notify(<div style={{color:'green'}}>Logged In Successfully</div>,{
      duration: 1000
    })
    // loggedInAction();
    onClose();
    window.location.reload(true)
    };

  const handleLoginError = (err) => {
    console.log("err", err)
  };

  const handleSubmitLogin = (values) => {
    // console.log("loginUser", loginUser);
    // eslint-disable-next-line eqeqeq
    setIsSubmitting(isLoading == true);
    setIsloading(true);
    loginService(loginUser)
      .then(handleLoginSucess)
      // eslint-disable-next-line eqeqeq
      // setIsloading(isLoading==false )
      .catch(handleLoginError)
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-content">
            <div className="login-div">
              <div className="login">Login</div>
              {/* <hr /> */}
              <img
                src={Images.CloseIcon}
                className="close-img"
                alt="Close Icon"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
              <TextField
                label="Email Address"
                placeholder="sourabh.k@rejolut.com"
                onChange={handleInputUser}
                name="identifier"
                id="identifier"
                required
                inputRef={register({ required: true })}
                // fullWidth
                inputProps={{ pattern: emailRegex }}
                value={identifier}
                type="email"
              />
              <TextField
                label="password"
                placeholder="*********"
                type={loginUser.showPassword ? "text" : "password"}
                required
                // fullWidth
                onChange={handleInputUser}
                name="password"
                id="password"
                inputProps={{ pattern: passwordRegex }}
                value={password}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <div
                        className="showPassword"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {loginUser.showPassword ? <h5>Hide</h5> : <h5>Show</h5>}
                      </div>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="checkbox-password">
                <div className="checkbox-container">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Remember Me"
                  />
                </div>
                <div
                  className="forgot-password"
                  onClick={handleForgotPasswordOpen}
                >
                  Forgot Password?
                </div>
              </div>
              <button
                type="Login"
                className="login-btn"
                // fullWidth
                // htmltype="submit"
                // onClick={handleSubmitLogin}
                disabled={isSubmitting}
              >
                Login
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
                    // position={Center}
                    timeout={15000} //3 secs
                  />
                </div>
              ) : null}
            </form>
            <div className="register-container">
              <button className="register-btn" onClick={handleRegistrationOpen}>
                New User? Register
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

export default connect(null, mapDispatchToProps)(Login);
