import React, { useState } from "react";
import "./index.scss";
import { Images } from "../../assets/index";
import { verifyMailOtpService } from "../../services/api-services";
import Loader from "react-loader-spinner";

function VerifyEmail(props) {
  const { onClose } = props;
  const [isLoading, setIsloading] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleVerifyEmailSucess = (response) => {
    props.handleSaveOtp(otp.join(""));
    const label = otp.join("")
    // console.log(label,"label")
    localStorage.setItem("emailOtp", label)
    setIsloading(isLoading === false);
    props.handleResetPasswordOpen()
  };

  const handleVerifyEmailError = (err) => {
    console.log("err", err);
  };

  const handleSubmitVerifyEmail = (e, values) => {
    e.preventDefault();
  const verifyOtp=otp.join("");
  setIsloading(true);
    verifyMailOtpService(verifyOtp)
      .then(handleVerifyEmailSucess())
      .catch(handleVerifyEmailError())
      // .finally(() => {
      //   //   setIsSubmitting(false);
      // });
  };
  return (
    <>
      <div className="verify-email-page">
        <div className="verify-email-container">
          <div className="verify-email-content">
            <div className="test">
              <div className="verify-email-div">
                <div className="verify-email">Verify Email!</div>
                <hr />
                <img
                  src={Images.CloseIcon}
                  className="close-img"
                  alt="close icon"
                  onClick={onClose}
                />
              </div>
              <p className="sent-otp">
                We have sent a 4 digit OTP code on your email address
                yourmail@mail.com, Please enter the OTP to verify..
              </p>
              <form onSubmit={handleSubmitVerifyEmail}>
                <div className="otp-container">
                  {otp.map((data, index) => {
                    return (
                      <input
                        className="otp"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => {
                          handleChange(e.target, index);
                        }}
                        onFocus={(e) => e.target.select()}
                      ></input>
                    );
                  })}
                </div>
                <div className="verify-btn-div">
                  <button
                    className="verify-btn"
                    //   onClick={handleSubmitVerifyEmail}
                  >
                    Verify
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
                </div>
              </form>
              <div className="receive-code-container">
                <h4>Didn’t Receive the code?</h4>
                <h3>Resend it</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
