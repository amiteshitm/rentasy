import React from "react";
import Header from "../../components/header";
import RouterOutlet from "./router-outlet.js";
import "./index.scss";
// import Rentals from "./home-rentals";
function Home(props) {
  return (
    <div className="home-page">
          <Header /> 
        <div className="home-page-content">
            <RouterOutlet  {...props} />
        </div>
    </div>
    // <div>
    //  <Header /> 
    //   <Rentals />
    //   <RouterOutlet {...props} />
    // </div>
  );
}
export default Home;
