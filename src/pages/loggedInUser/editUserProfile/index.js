import React, { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Images } from "../../../assets";
import "./index.scss";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

function EditUserProfile() {
  const history = useHistory();

  const handleUserData = () => {
    history.push("/loggedInUser/viewUserProfile");
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    userName: "",
    email: "",
    dob: "",
    phone: "",
    address: "",
    about: "",
  });
  const handleUserField = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const { fullName, userName, email, dob, phone, address, about } = userInfo;
  return (
    <>
      <div className="edit_profile_page">
        <Header />
        <div className="edit_profile_details_container">
          <div className="edit_profile_details_container_div">
            <div className="customer_details_container">
              <img
                src={Images.ProfileImageIcon}
                className="profile_image_img"
                alt=""
              />
              <h3>Megan Srewat</h3>
              <h4>@megans123</h4>
            </div>
            <div className="edit_profile_details_content">
              <div className="my_profile_div">
                <h3>Edit Profile</h3>
                <button onclick={handleUserData} className="cancel_btn">
                  <img src={Images.CloseIcon} className="cancel_img" alt="" />
                  <h4>Cancel</h4>
                </button>
              </div>
              <div className="edit_profile_details">
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={fullName}
                  placeholder="Megan Srewat"
                  type="text"
                  fulwidth
                  onChange={handleUserField}
                  required
                />
                <TextField
                  label="Username"
                  name="userName"
                  value={userName}
                  placeholder="@megans@123"
                  type="text"
                  fulwidth
                  onChange={handleUserField}
                  required
                />
                <TextField
                  label="Email Address"
                  name="email"
                  value={email}
                  placeholder="meganhrewat@mail.com"
                  type="text"
                  fulwidth
                  required
                  onChange={handleUserField}
                />
                <MuiPickersUtilsProvider
                  className="datePicker"
                  utils={DateFnsUtils}
                >
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Date picker dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>

                <TextField
                  label="Date of Birth"
                  name="dob"
                  value={dob}
                  placeholder="10-16-2020"
                  type="number"
                  fulwidth
                  onChange={handleUserField}
                  required
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={phone}
                  placeholder=""
                  type="number"
                  fulwidth
                  onChange={handleUserField}
                  required
                />
                <TextField
                  label="Address"
                  name="address"
                  value={address}
                  placeholder="59 Street, Toronto"
                  type="text"
                  fulwidth
                  onChange={handleUserField}
                  required
                />
                <div className="textarea-div">
                  <TextField
                    label="About"
                    name="about"
                    value={about}
                    onChange={handleUserField}
                    placeholder="Here this will show your brief details…"
                    type="text"
                    fulwidth
                    required
                  />
                </div>
                <button>Update</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default EditUserProfile;
