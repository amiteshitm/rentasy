import React, { useState, useEffect } from "react";
import { Images } from "../../../assets";
import "./index.scss";
import Loader from "react-loader-spinner";
import axios from "axios";
// import Header from "../../../components/header";
import Footer from "../../../components/footer";
import CatagoriesMenu from "./catagories-menu";


const sofadata = [
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "American Cherry Sofa",
    rating: "4.2",
    rent: "$30/day",
  },
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "L- Shaped Sofa",
    rating: "4.3",
    rent: "$20/day",
  },
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "L- Shaped Sofa",
    rating: "4.3",
    rent: "$20/day",
  },
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "L- Shaped Sofa",
    rating: "4.3",
    rent: "$20/day",
  },
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "Acoustic Guitar",
    rating: "4.6",
    rent: "$10/day",
  },
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "Acoustic Guitar",
    rating: "4.9",
    rent: "$10/day",
  },
];

function SeeMoreCatagories() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://renteasy.ml/rental-categories`, {
        // headers: { Authorization: `Bearer ${ID}` },
      })
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e.response.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log("categoriesName", categories);
 
  // useEffect(() => {
  //   // setLoading(true);
  //   async function getCategoriesData() {
  //     try {
  //       const categoriesData = await axios.get(
  //         `https://renteasy.ml//rental-categories`
  //       );
  //       setCategories(categoriesData.data);
  //       // setLoading(false);
  //       console.log("res:", categoriesData.data);
  //       // console.log("resapiData:",res.data);
  //     } catch (error) {
  //       setIsError(true);
  //     }

  //       // setLoading(false);

  //   }
  //   getCategoriesData();
  // }, []);
  // const catg=categories[0].subcategories;
  return (
   
     
    <div className="see-more-catagories-page">
    
      {/* <Header /> */}
      <div className="see-more">
        <h3>All Categories</h3>
      </div>
      <div className="see-more-catagories-container">
        <div className="all-catagories">
          <CatagoriesMenu />
        </div>

        <div className="more-catagories-content">
          <div className="sofa-details-container">
          {/* { categories ? (categories[0].subcategories).map((item,i)=> { return item.name}):null } */}
            { categories ? (categories.name.subcategories).map((sofa) => (
              <div className="sofa-details-content">
                <div className="sofa-details">
                  <div className="sofa-fav-img">
                    {sofa.sofaimage}
                    <img
                      src={Images.WhitecircleIcon}
                      className="white-circle-img"
                      alt=""
                    />
                    <img
                      src={Images.HeartlightIcon}
                      className="heartlight-img"
                      alt=""
                    />
                  </div>
                  <div className="sofa-brand-name">
                    <div className="sofa-brand">{sofa.sofaname}</div>
                    <div className="review-rating">
                      <div className="rating-content">
                        <span className="rating">{sofa.rating}</span>
                        <img src={Images.StarlightIcon} alt="" />
                      </div>
                      <h4 className="owner-name">05 Reviews</h4>
                    </div>
                    <span className="rent-details">
                      <span className="rent">Rent:</span>
                      <span className="rent-per-day">{sofa.rent}</span>
                    </span>
                  </div>
                </div>
              </div>
            )) : null }
          </div>
        </div>
      </div>
      <Footer />
      {/* <div className="bottom-details-container">
        <div className="bottom-details-content">
          <div className="about-container">
            <div className="about">About</div>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Tweets</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="about-container">
            <div className="about">Help</div>
            <p>Payments</p>
            <p>Cancellation and Refunds</p>
            <p>FAQ’s</p>
            <p>Report</p>
          </div>
          <div className="about-container">
            <div className="about">Policy</div>
            <p>Return Policy</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
          </div>
          <div className="about-container">
            <div className="about">Social Media</div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Youtube</p>
            <p>Instagram</p>
          </div>
          <div className="address-container">
            <div className="about">Office Address</div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </p>
            <p>Phone Number: +9218301290/ 21872083912</p>
            <p>Mail us at admin@renteasyapp</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default SeeMoreCatagories;
