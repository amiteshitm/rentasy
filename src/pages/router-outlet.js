import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "react-loader-spinner";

const Landing = React.lazy(() => import("./landing"));
const Account = React.lazy(() => import("./account"));
// const Login = React.lazy(() => import('./login'));
// const Register = React.lazy(() => import('./register'));
// const SignUp = React.lazy(() => import('./signup'));
const Home = React.lazy(() => import("./home"));
const ForgotPassword = React.lazy(() => import("./forgot-password"));
const ResetPassword = React.lazy(() => import("./reset-password"));
const AddItem1 = React.lazy(() => import("./addServiceItems"));
const AddItem = React.lazy(() => import("./addRentalItems"));
const VerifyEmail = React.lazy(() => import("./verify-email"));
const Furniture = React.lazy(() => import("./home/categories/furniture"));
const Fitness = React.lazy(() => import("./home/categories/fitness"));
const Automative = React.lazy(() => import("./home/categories/automative"));
const Camping = React.lazy(() => import("./home/categories/camping"));
const ClothingsAndAccessories = React.lazy(() =>
  import("./home/categories/clothings-and-accessories")
);
const CollegeBooks = React.lazy(() =>
  import("./home/categories/college-books")
);
const Electronics = React.lazy(() => import("./home/categories/electronics"));
const MusicInstruments = React.lazy(() =>import("./home/categories/music-instruments"));
const Categories = React.lazy(() =>import("./home/categories"));
const ViewUserProfile = React.lazy(() =>import("./loggedInUser/viewUserProfile"));
const EditUserProfile = React.lazy(() =>import("./loggedInUser/editUserProfile"));

function RouterOutlet(props) {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", marginTop: 250 }}>
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={15000} //3 secs
          />
        </div>
      }
    >
      <Route exact path="/" render={(props) => <Landing {...props} />} />
      <Route path="/loggedInUser/viewUserProfile" render={(props) => <ViewUserProfile {...props} />} />
      <Route path="/loggedInUser/editUserProfile" render={(props) => <EditUserProfile {...props} />} />
      <Route path="/account" render={(props) => <Account {...props} />} />
      {/* <Route path="/login" render={props => (<Login {...props} /> )}/>
            <Route path="/register" render={props => (<Register {...props} /> )}/> */}
      {/* <Route path="/signup" render={props => (<SignUp {...props} /> )}/> */}
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route
        path="/forgot-password"
        render={(props) => <ForgotPassword {...props} />}
      />
      <Route
        path="/verify-email"
        render={(props) => <VerifyEmail {...props} />}
      />
      <Route
        path="/reset-password"
        render={(props) => <ResetPassword {...props} />}
      />
      <Route path="/add-item1" render={(props) => <AddItem1 {...props} />} />

      <Route path="/add-rental-items" render={(props) => <AddItem {...props} />} />

      <Route path="/home/categories" render={(props) => <Categories {...props} />} />

      <Route
        path="/categories/furniture"
        render={(props) => <Furniture {...props} />}
      />
      <Route
        path="/categories/fitness"
        render={(props) => <Fitness {...props} />}
      />
      <Route
        path="/categories/automative"
        render={(props) => <Automative {...props} />}
      />
      <Route
        path="/categories/camping"
        render={(props) => <Camping {...props} />}
      />
      <Route
        path="/categories/clothings-and-accessories"
        render={(props) => <ClothingsAndAccessories {...props} />}
      />
      <Route
        path="/categories/collegeBooks"
        render={(props) => <CollegeBooks {...props} />}
      />
      <Route
        path="/categories/electronics"
        render={(props) => <Electronics {...props} />}
      />
      <Route
        path="/categories/musicInstruments"
        render={(props) => <MusicInstruments {...props} />}
      />
    </Suspense>
  );
}

export default RouterOutlet;
