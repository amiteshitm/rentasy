import React, { useState } from "react";
import { Images } from "../../../assets";
import {Link } from "react-router-dom";
import "./index.scss";
import LogOut from "../../logOut";
// import { FastForward } from "@material-ui/icons";
// import { Modal } from "@material-ui/core";
import ItemLender from "./itemsLender";

const LoggedInUserDropdown = () => {
  // const history = useHistory();
  const [lender, setLender] = useState(false);

  // const handleViewProfile=()=>{
  //     history.push("/loggedInUser/viewUserProfile");
  // }

    // const MouseOver = (event) => {
    //   event.target.style.background = "#DE0322";
    //   // setLender(true);
    // };
    // const MouseOut = (event) => {
    //   event.target.style.background = "";
    // };

  return (
    <>
      <div className="view-profile-page">
        <div className="view-profile-container">
          <div className="profile-details">
            <div className="profile-name">
              <h3>Megan Srewat</h3>
              <h4>@megans123</h4>
            </div>
            <Link to="loggedInUser/viewUserProfile">
              <div className="view-profile-div">View Profile</div>
            </Link>
          </div>
          <div className="customer-important-list">
            <div className="important-list-content">
              <div className="important-list">
               
                  <div
                    onMouseEnter={() => setLender(true)}
                    onMouseLeave={() => setLender(false)}
                    className="items-content-div"
                  >
                    <img src={Images.ItemsIcon} alt="" />
                    <h4>Items</h4>
                  </div>
                  {/* <Modal open={lender}>
                {lender && <div className="lenderTestPosition"><ItemLender /></div>}
                </Modal> */}
                {lender && <div className="lenderTestPosition"><ItemLender /></div>}
                  <img src={Images.GreaterIcon} alt="" />
                </div>
                <div className="list-div">
                  <img src={Images.HeartsavedIcon} alt="" />
                  <h4>saved</h4>
                </div>
                <div className="list-div">
                  <img src={Images.AdduserIcon} alt="" />
                  <h4>Message</h4>
                </div>
                <h3 className="user-div">User</h3>

                <div className="list-div">
                  <img src={Images.AdduserIcon} alt="" />
                  <h4>Invite Friend</h4>
                </div>
                <div className="list-div">
                  <img src={Images.ListenIcon} alt="" />
                  <h4>Contact Support</h4>
                </div>
                <div className="list-div">
                  <img src={Images.SettingIcon} alt="" />
                  <h4>Setting</h4>
                </div>
                <h3 className="user-div">Business Service</h3>
                <div className="list-div">
                  <img src={Images.SettingIcon} alt="" />
                  <h4>List your business</h4>
                </div>
                <h3 className="user-div">Leave Renteasy?</h3>
                <div className="list-div">
                  <img src={Images.LogoutIcon} alt="" />
                  <LogOut />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default LoggedInUserDropdown;
