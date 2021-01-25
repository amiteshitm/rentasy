import React from "react";
import { Images } from "../../../../assets/index";
import "./index.scss";
import Header from "../../../../components/header";

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
    sofaname: "Acoustic Guitar",
    rating: "4.6",
    rent: "$10/day",
  },
  {
    sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />,
    sofaname: "Blue Berry",
    rating: "4.8",
    rent: "$60/day",
  },
];

function ListingPage() {
  return (
    <>
      <div className="listing-page-container">
        <Header />
        <div className="listing-page-details">
          <div className="listing-page-details-content">
            <div className="catagories-div">
              <h4 className="home">Home</h4>
              <img src={Images.GreaterIcon} className="greater-img" alt="" />
              <h4 className="deposit">Categories</h4>
              <img src={Images.GreaterIcon} className="greater-img" alt="" />
              <h4 className="deposit">Furniture</h4>
              <img src={Images.GreaterIcon} className="greater-img" alt="" />
              <h3 className="l-sofa">Red L-Shaped Sofa</h3>
            </div>
            <div className="sofa-order-container">
              <div className="sofa-img-container">
                <div className="user-image-div">
                  <img
                    src={Images.UserimageIcon}
                    className="userimage-img"
                    alt=""
                  />
                </div>
                <div className="sofa-image-div">
                  <img
                    src={Images.BackwardlightcircleIcon}
                    className="backcircle-img"
                    alt=""
                  />
                  <div className="different-sofa">
                    <img src={Images.SofaIcon} className="sofa-img" alt="" />
                    <img src={Images.SofaIcon} className="sofa-img" alt="" />
                    <img src={Images.SofaIcon} className="sofa-img" alt="" />
                  </div>
                  <img
                    src={Images.ForwardlightcircleIcon}
                    className="backcircle-img"
                    alt=""
                  />
                </div>
                <div className="btn-container">
                  <button className="buynow-btn">Buy Now</button>
                  <button className="addcart-btn">
                    <img
                      src={Images.BuycartIcon}
                      className="buycart-img"
                      alt=""
                    />
                    <div className="addcart">Add to cart</div>
                  </button>
                </div>
              </div>

              <div className="american-sofa-details-container">
                <div className="sofa-name-details-container">
                  <div className="sofa-details-container">
                    <div className="sofa-name">
                      <h4 className="customer-review">American Cherry Sofa</h4>
                      <h4 className="owner-name">by Owner Name</h4>
                    </div>
                    <div className="review-rating">
                      <div className="rating-content">
                        <span className="rating">4.1</span>
                        <img src={Images.StarlightIcon} alt="" />
                      </div>
                      <h4 className="owner-name">05 Reviews</h4>
                    </div>
                    <div className="location-details">
                      <div className="location-address">
                        <img
                          src={Images.LocationIcon}
                          className="location-img"
                          alt=""
                        />
                        <h4 className="min-rental">
                          4567 Lougheed Hwy, Burnaby, BC V5C, Canada
                        </h4>
                      </div>
                      <button className="available">Available</button>
                    </div>
                  </div>
                  <div className="heart-share-img">
                    <img
                      src={Images.HeartlightIcon}
                      className="heartlight-img"
                      alt=""
                    />
                    <img src={Images.ShareIcon} className="share-img" alt="" />
                  </div>
                </div>
                <div className="cost-deatils-container">
                  <div className="cost-container">
                    <div className="rent-div">
                      <h4 className="deposit">Rate</h4>
                      <div className="dollar-div">
                        <h4 className="dollar">$</h4>
                        <h3>25</h3>
                        <h4 className="dollar">/day</h4>
                      </div>
                    </div>
                    <div className="deposit-cost">
                      <h4 className="deposit">Deposit</h4>
                      <div className="dollar-div">
                        <h4 className="dollar">$</h4>
                        <h3>25</h3>
                      </div>
                    </div>
                    <div className="rent-div">
                      <h4 className="deposit">Delivery Cost</h4>
                      <div className="dollar-div">
                        <h4 className="dollar">$</h4>
                        <h3>17</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-container">
                  <h3 className="other-details">Delivery:</h3>
                  <div className="location-div">
                    <div className="location">
                      <img src={Images.LocationIcon} alt="" />
                      <h4 className="min-rental">Toronto</h4>
                    </div>
                    <div className="set-location">Set Location</div>
                  </div>
                </div>
                <h3 className="other-details">Description:</h3>
                <p className="description-para">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam.
                </p>
                <div className="other-details-container">
                  <h3 className="other-details">Other Details:</h3>
                  <div className="details-content">
                    <div className="minimum-rent-div">
                      <h4 className="min-rental">Minimum Rental</h4>
                      <h4 className="rent-price">1 Days</h4>
                    </div>
                    <div className="minimum-rent-div">
                      <h4 className="min-rental">Maximum Rental</h4>
                      <h4 className="rent-price">15 Days</h4>
                    </div>
                    <div className="minimum-rent-div">
                      <h4 className="min-rental">Replacement Cost</h4>
                      <h4 className="rent-price">$ 500</h4>
                    </div>
                    <div className="minimum-rent-div">
                      <h4 className="min-rental">Condition</h4>
                      <h4 className="rent-price">Excellent</h4>
                    </div>
                    <div className="minimum-rent-div">
                      <h4 className="min-rental">Purchase Date</h4>
                      <h4 className="rent-price">2015</h4>
                    </div>
                  </div>
                </div>
                <h3 className="other-details">Additional Note:</h3>
                <p className="description-para">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
                <div className="flag-report-chat-container">
                  <div className="report-chat-div">
                    <button className="report-div">
                      Flag & report this item
                    </button>
                    <button className="report-div">Chat with owner</button>
                  </div>
                </div>
                <h4 className="customer-review">Customer Reviews</h4>
                <div className="global-rating-details">
                  <h4 className="global-rating">Global Rating</h4>
                  <div className="rating">
                    <img
                      src={Images.RedstarIcon}
                      className="red-star-img"
                      alt=""
                    />
                    <img
                      src={Images.RedstarIcon}
                      className="red-star-img"
                      alt=""
                    />
                    <img
                      src={Images.RedstarIcon}
                      className="red-star-img"
                      alt=""
                    />
                    <img
                      src={Images.RedstarIcon}
                      className="red-star-img"
                      alt=""
                    />
                    <img
                      src={Images.RedstarIcon}
                      className="red-star-img"
                      alt=""
                    />
                    <h4 className="global-rating">4/5</h4>
                  </div>
                </div>
                <div className="customer-review-details">
                  <img
                    src={Images.ProfileIcon}
                    className="profile-img"
                    alt=""
                  />
                  <div className="customer-name-details">
                    <h4 className="customer-name">Jessica Alba</h4>
                    <div className="test">
                      <div className="rating">
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <h4 className="global-rating">4/5</h4>
                      </div>
                      <div className="reviewed">Reviewed on 10-22-2020</div>
                    </div>
                  </div>
                </div>
                <h4 className="love-sofa">Loved the L-shaped sofa.</h4>
                <p className="description-para">
                  It was a great deal for me, my guest like this colour, I will
                  order once again. Thank you RentEasy.
                </p>
                <div className="customer-review-details">
                  <img
                    src={Images.ProfileIcon}
                    className="profile-img"
                    alt=""
                  />
                  <div className="customer-name-details">
                    <h4 className="customer-name">Robert Downey</h4>
                    <div className="test">
                      <div className="rating">
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <img
                          src={Images.RedstarIcon}
                          className="red-star-img"
                          alt=""
                        />
                        <h4 className="global-rating">4/5</h4>
                      </div>
                      <div className="reviewed">Reviewed on 10-22-2020</div>
                    </div>
                  </div>
                </div>
                <h4 className="love-sofa">Great Deal, Go for it.</h4>
                <p className="description-para">
                  RentEasy never disappoint us with the product. Great deal
                  after all.
                </p>
                <div className="report-chat-container">
                  <div className="report-chat-div">
                    <button className="report-div">See all reviews</button>
                    <button className="report-div">Write a review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="choice-furniture-details">
          <div className="choice-container">
            <div className="check-explore-container">
              <div className="check-div">Similar Objects</div>
              <hr />
              <button className="explore-more-div">Explore more</button>
            </div>
            <div className="sofa-variety-container">
              <div className="sofa-details-container">
                {sofadata.map((sofa) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-details-container">
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>
              <p>Phone Number: +9218301290/ 21872083912</p>
              <p>Mail us at admin@renteasyapp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListingPage;
