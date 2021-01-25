import React, { useEffect, useState } from "react";
import { Images } from "../../../assets";
import Loader from "react-loader-spinner";
import "./index.scss";
import Header from "../../../components/header";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
// import { useSelector, useDispatch } from "react-redux";
// import { userDetails } from "../../../action/getProfileDetailAction";
// import { getProfileReducer } from "../../../reducer/getProfileDetailReducer";
import { userDataService } from "../../../services/api-services";
import Footer from "../../../components/footer";
const ViewUserProfile = () => {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showData, setShowData] = useState(true);
  const [disabled, setdisabled] = useState(true);
  // const [loading, setLoading] = useState(false);
  // let toggleEdit = true;
  const [userInfo, setUserInfo] = useState({
    fullname:"",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    dob: "",
    phone: "",
    address: "",
    about: "",
  });
  const handleUserField = (e) => {
    const prevUserInfo = { ...userInfo };
    prevUserInfo[e.target.name] = e.target.value;
    setUserInfo(prevUserInfo);
  };
  // const { fullName, userName, email, dob, phone, address, about } = userInfo;
  const handleEdit = () => {
    setShowData(!showData);
    setdisabled(false);
  };
// const handleEditUpdateToggle=()=>{
//   setShowData(!showData);
//   setdisabled(true);
// }
  //   const handleEdit = () => {
  //     history.push("/loggedInUser/editUserProfile");
  //   };
  //   const allData = useSelector((state) => state.getProfileReducer);
  //   useEffect(() => {
  //     if (allData) {
  //       setProfileData(allData.data);
  //       console.log(allData.data)
  //     }
  //   }, [allData]);
  //   useEffect(() => {
  //     dispatch(userDetails());
  //   }, [dispatch]);
  const ID = localStorage.getItem("token");
  useEffect(() => {
    setIsloading(true);
    axios
      .get(`https://renteasy.ml/loggedinuser`, {
        headers: { Authorization: `Bearer ${ID}` },
      })
      .then((res) => {
        setProfileData(res.data);
        // let leblalUserData = userInfo;
        // localStorage.setItem("usersId", leblalUserData);
        setUserInfo({
          //   fullName: res.data.response.fullName,
          fullname: res.data.response.fullname,
          firstname: res.data.response.firstname,
          lastname: res.data.response.lastname,
          username: res.data.response.username,
          email: res.data.response.email,
          dob: res.data.response.dob,
          phone: res.data.response.phone,
          address: res.data.response.address,
          about: res.data.response.about,
          id: res.data.response.id,
        });
        setIsloading(false);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e.response.data);
        }
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [ID]);
  console.log("profileData", profileData);
  // console.log("profileDataN",profileData.data.username);
  // console.log("profileDataR",profileData.response);
  // console.log("profileDataRU",profileData.response.username);
  //   const handleViewUserSucess = (response) => {
  //     // <h1>gsf</h1>
  //     const token = response?.data?.jwt;
  //     localStorage.setItem("token", token);
  //   };
  //   const handleViewUserError = (err) => {
  //     console.log("err", err);
  //   };
  //   const handleSubmitViewUser = (values) => {
  //     userData().then(handleViewUserSucess()).catch(handleViewUserError);
  //   };
  // console.log("toggle1", toggleEdit);

  const handleLoginSucess = (response) => {
    // <h1>gsf</h1>
    const token = response?.data?.jwt;
    localStorage.setItem("token", token);
    // eslint-disable-next-line eqeqeq
    setIsloading(false);
    setdisabled(true);
  };

  const handleLoginError = (err) => {
    console.log("err", err);
    setIsloading(false);
  };
  // const id = localStorage.getItem();

  const handleUpdate = () => {
    console.log("handleUpdate");
    setIsSubmitting(true);
    setIsloading(true);
    // console.log("id",id);
    userDataService(userInfo, userInfo.id)
      .then(handleLoginSucess)

      // setIsloading(false )
      .catch(handleLoginError)
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <div className="edit_profile_page">
        <Header />
        <div className="edit_profile_details_container">
          <div className="edit_profile_details_container_content">
            <div className="customer_details_container">
            <div className="profile_camera_div">
                <img src={Images.ProfileImageIcon} className="profile_image_img" alt="" />
                <img src={Images.CameralightIcon} className="camera_light_img" alt="" />
              </div>
              {/* <img
                src={Images.ProfileImageIcon}
                className="profile_image_img"
                alt=""
              /> */}
              {/* <h3>Megan Srewat</h3> */}
              <h3>{userInfo.firstname + " " + userInfo.lastname}</h3>
              {/* <h4>@megans123</h4> */}
              <h4>{userInfo.username}</h4>
            </div>
            <div className="edit_profile_details_content">
              <div className="my_profile_div">
             {showData ? (<h3>My Profile</h3>) : (<h3>Edit Profile</h3>) }    
                <button onClick={handleEdit} className="viewProfileButton">
                  {showData ? (
                    <div className="edit_btn">
                      <img src={Images.EditIcon} className="edit_img" alt="" />
                      <h4>Edit</h4>
                    </div>
                  ) : (
                    <div className="cancel_btn">
                      <img
                        src={Images.CloseredIcon}
                        className="cancel_img"
                        alt=""
                      />
                      <h4>Cancel</h4>
                    </div>
                  )}
                </button>
              </div>
              {profileData.response ? (
                <div className="edit_profile_details">
                  <TextField
                    label="Full Name"
                    name="fullname"
                    disabled={disabled}
                    onChange={handleUserField}
                    placeholder="Megan Srewat"
                    type="text"
                    fulwidth
                    required
                    value={userInfo.fullname}
                  />

                  {/* value={userInfo.firstname + " " + userInfo.lastname} */}
                  {/* { showData ? <TextField > : [
    <TextField firstname/>
    <TextField lastname/>
] */}
                  <TextField
                    label="Username"
                    disabled={disabled}
                    name="username"
                    placeholder="@megans@123"
                    type="text"
                    fulwidth
                    onChange={handleUserField}
                    required
                    value={userInfo.username}
                  />
                  <TextField
                    label="Email Address"
                    disabled={true}
                    placeholder="meganhrewat@mail.com"
                    type="text"
                    // onChange={handleUserField}
                    fulwidth
                    name="email"
                    required
                    value={userInfo.email}
                  />
                  <TextField
                    label="Date of Birth"
                    disabled={disabled}
                    placeholder="10-16-2020"
                    type="date"
                    fulwidth
                    onChange={handleUserField}
                    required
                    name="dob"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={userInfo.dob}
                  />
                  <TextField
                    label="Phone Number"
                    disabled={disabled}
                    placeholder=""
                    type="number"
                    fulwidth
                    name="phone"
                    onChange={handleUserField}
                    required
                    value={userInfo.phone}
                  />
                  <TextField
                    label="Address"
                    disabled={disabled}
                    placeholder="59 Street, Toronto"
                    type="text"
                    fulwidth
                    onChange={handleUserField}
                    required
                    name="address"
                    value={userInfo.address}
                  />
                  <div className="textarea-div">
                    <TextField
                      label="About"
                      disabled={disabled}
                      placeholder="Here this will show your brief details…"
                      type="text"
                      name="about"
                      fulwidth
                      onChange={handleUserField}
                      required
                      value={userInfo.about}
                    />

                    {!showData ? (
                      <button
                        disabled={isSubmitting}
                        className="updateButton"
                        onClick={handleUpdate }
                      >
                        Update
                      </button>
                    ) : null}
                    {isLoading ? (
                      <div
                        style={{
                          textAlign: "center",
                          marginLeft: 200,
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
                    {/* {!showData ? <UpdateButton onClickFunction={}/> :null} */}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ViewUserProfile;
