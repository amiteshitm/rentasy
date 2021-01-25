import React, { useState, useEffect } from "react";
import { Modal,Backdrop,withStyles } from "@material-ui/core";
import { Images } from "../../assets";
import LoggedInUserDropdown from "./loggedInUserDropdown";
// import ItemLender from "./loggedInUserDropdown/itemsLender";

const LoggedInUser = () => {

  const [isUserLoggedInOpen, setIsUserLoggedInOpen] = useState(false);

  const handleToggle = () => {
    setIsUserLoggedInOpen(!isUserLoggedInOpen);
  };

  const StyledBackdrop = withStyles((theme) => ({
    root: {
      background: "transparent",
    },
  }))(Backdrop);
  // useEffect(() => {
  //   if(!localStorage.getItem("token")){
  //     setIsUserLoggedInOpen(true)
  //   }

  // },[])

  return (
    <div>
      <div onClick={handleToggle} className="loggedIn">
        Hello&nbsp;
        <img src={Images.HeartIcon} alt="user profile" />
      </div>

      <Modal  BackdropComponent={StyledBackdrop} open={isUserLoggedInOpen} onClose={handleToggle}>
        {<div>{isUserLoggedInOpen ? <LoggedInUserDropdown /> : null}</div>}
        {/* {<div>{isUserLoggedInOpen ? <ItemLender /> : null}</div>} */}
      </Modal>
      {/* <loggedInUserDropdown/> */}
    </div>
  );
};
export default LoggedInUser;
