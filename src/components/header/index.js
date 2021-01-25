import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Images } from "../../assets";
import "./index.scss";
import HomePageSelector from "../header/homePageSelector";
import RegisterLogin from "../registerLoginPages";
import LoggedInUser from "../../pages/loggedInUser";
import { loggedOut } from "../../action/user";
import { Backdrop, Modal, withStyles } from "@material-ui/core";

function Header(props) {
  const history = useHistory();
  const [isLoggedIn, loggedOutAction] = useState(false);
  const [isHomepageOpen, setIsHomepageOpen] = useState(false);
  const { handleAddItem } = props;
  useEffect(
    (props) => {
      if (localStorage.getItem("token")) {
        loggedOutAction(true);
      } else {
        loggedOutAction(false);
      }
    },
    [isLoggedIn]
  );

  const handleToggle = () => {
    setIsHomepageOpen(!isHomepageOpen);
  };
  const StyledBackdrop = withStyles((theme) => ({
    root: {
      background: "transparent",
    },
  }))(Backdrop);

  const handlePages = (e) => {
    const rentalServicePages = e.target.value || "Rentals";

    if (rentalServicePages === "Services") {
      history.push("/home/services");
      return;
    }
    history.push("/home/rentals");
  };

  return (
    <header className="header">
      <div className="site-branding">
        <div className="renteasy-select-content">
          <img
            src={Images.RenteasyIcon}
            className="renteasy-img"
            alt="Renteasy icon"
            onClick={() => history.push("/")}
          />
          <div className="select-container" onClick={handleToggle}>
            <div className="select-type">Select Type</div>
            <div className="rental_select">
              <h4>Rentals</h4>
              {/* {(props.handleAddItem && <h4>Rentals</h4>) ||
                (!props.handleAddItem && <h4>Services</h4>)} */}
              {!isHomepageOpen ? (
                <img
                  src={Images.DownarrowIcon}
                  alt=""
                  className="down_arrow_img"
                />
              ) : (
                <img
                  src={Images.DownarrowIcon}
                  alt=""
                  className="up_arrow_img"
                />
              )}
            </div>
            {/* <div onClick={handleToggle} className="select-type">
              Select Type
              <div>
                <h4>Rentals</h4>
                <img src={Images.SelectIcon} alt="" />
              </div>
            </div> */}
            {/* <select
              // value={rentalServicePages}
              // onChange={(e)=>{
              //   const rentalServicePages=e.target.value;
              //   setRentEasyPages(rentalServicePages);

              // }}
              onChange={handlePages}
            >
              <option>Rentals</option>
              <option>Services</option>
            </select> */}
            <Modal
              BackdropComponent={StyledBackdrop}
              open={isHomepageOpen}
              onClose={handleToggle}
            >
              {
                <div>
                  {isHomepageOpen ? (
                    <HomePageSelector closeTab={isHomepageOpen} />
                  ) : null}
                </div>
              }
            </Modal>
          </div>
        </div>
        <div className="input-container">
          <img
            src={Images.SearchIcon}
            className="search-img"
            alt="Search icon"
          />
          <input type="text" placeholder="What would you like to rent?" />
        </div>
        <div className="location-container">
          <img
            src={Images.LocationIcon}
            className="location-img"
            alt="Location icon"
          />
          <div className="location-name">Toronto</div>
          <img
            src={Images.DownarrowIcon}
            className="downarrow-img"
            alt="Downarrow icon"
          />
        </div>
        <div className="icons-container">
          <img src={Images.HeartIcon} className="heart-img" alt="Heart icon" />
          <img
            src={Images.NotificationIcon}
            className="notification-img"
            alt="notification icon"
          />
          <img src={Images.CartIcon} className="cart-img" alt="cart icon" />
        </div>
        {isLoggedIn === true ? <LoggedInUser /> : <RegisterLogin />}
        {/* {isLoggedIn ? <button onClick={loggedOutAction}>Logout</button> : null} */}
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  console.log("state mapStateToProps", state);
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggedOutAction: () => dispatch(loggedOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
