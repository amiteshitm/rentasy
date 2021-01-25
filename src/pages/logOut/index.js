import React from "react";
import { connect } from "react-redux";
import { loggedOut } from "../../action/user";
import { useHistory } from "react-router-dom";

const LogOut = (props) => {
   const history = useHistory();
  const { isLoggedIn, loggedOutAction } = props;
  const handleLogout=()=>{
    
    // loggedOutAction()
    console.log("hello")
    localStorage.clear();
    window.location.href = "/"
    window.location.reload(true)    // history.push("/")
  }
  return (
    <div>
    <h4 onClick={()=>handleLogout()}>LogOut</h4>
    </div>
  );
};
const mapStateToProps = (state) => {
    console.log('state mapStateToProps', state);
    return {
      isLoggedIn: state.user.isLoggedIn,
    };
  };
  

const mapDispatchToProps = (dispatch) => {
  return {
    loggedOutAction: () => dispatch(loggedOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
