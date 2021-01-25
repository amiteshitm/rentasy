import React from 'react';
import { Images } from '../../../assets/index';
import './index.scss';
import Carousel from "../carousel";
import Footer from '../../../components/footer';


const sofadata = [
    { sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />, sofaname: 'American Cherry Sofa', rating: '4.2', rent: '$30/day' },
    { sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />, sofaname: 'L- Shaped Sofa', rating: '4.3', rent: '$20/day' },
    { sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />, sofaname: 'Acoustic Guitar', rating: '4.6', rent: '$10/day' },
    { sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />, sofaname: 'Vila for Rent', rating: '5', rent: '$50/day' },
    // { sofaimage: <img src={Images.SofaIcon} className="sofa-img" alt="" />, sofaname: 'Blue Berry', rating: '4.8', rent: '$60/day' }
];

function HomeServices() {
    return (
        <>
            <div className="rentals-page">
                <div className="test">
                  <Carousel/>
                    {/* <div className="renteasyimage-page">
                        <img src={Images.RenteasyimageIcon} className="renteasyimage-img" alt="" />
                    </div> */}
                    <div className="browser-catagory-see">
                        <div className="browser-catagory">Browser Category</div>
                        <div className="see-more">See more</div>
                    </div>
                    <div className="items-container">
                        <div className="items-name">
                            <img src={Images.FurnitureIcon} alt="" />
                            <div className="college-books">Furniture</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.Automative} alt="" />
                            <div className="college-books">Automative</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.ClothingIcon} alt="" />
                            <div className="college-books">Clothing & <br />Accessories</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.ElectronicsIcon} alt="" />
                            <div className="college-books">Electronics</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.CollegebooksIcon} alt="" />
                            <div className="college-books">College Books</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.CampingIcon} alt="" />
                            <div className="college-books">Camping</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.FitnessIcon} alt="" />
                            <div className="college-books">Fitness</div>
                        </div>
                        <div className="items-name">
                            <img src={Images.MusicalinstrumentsIcon} alt="" />
                            <div className="college-books">Musical <br />Instruments</div>
                        </div>
                    </div>
                    <div className="choice-container">
                        <div className="check-explore-container">
                            <div className="check-div">You need to check this out!!</div>
                            <button className="explore-more-div">Explore more</button>
                        </div>
                        <div className="sofa-variety-container">
                            <div className="icon">
                                <img src={Images.BackwardcircleIcon} alt="" />
                                <img src={Images.ForwardcircleIcon} className="forwarcircle-img" alt="" />
                            </div>
                            <div className="sofa-details-container">
                                {sofadata.map(sofa => (
                                    <div className="sofa-details-content">
                                        <div className="sofa-details">
                                            <div className="sofa-fav-img">
                                                {sofa.sofaimage}
                                                <img src={Images.WhitecircleIcon} className="white-circle-img" alt="" />
                                                <img src={Images.HeartlightIcon} className="heartlight-img" alt="" />
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

                    <div className="renteasy-choice-container">
                        <div className="why">Why Choose Renteasy</div>
                        <div className="available-renteasy-on">
                            <div className="available-renteasy">
                                <div className="available-on">
                                    <div className="logo-app">
                                        <img src={Images.RenteasylogoIcon} className="renteasylogo-img" alt="" />
                                        <div className="renteasy-store">
                                            <h3>App Available on</h3>
                                            <div className="google-app-icon">
                                                <img src={Images.GoogleplayIcon} className="app-store-img" alt="" />
                                                <img src={Images.AppstoreIcon} className="app-store-img" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={Images.MobilerenteasyIcon} className="mobile-renteasy-img" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="users-review-container">
                        <div className="users-review-content">
                            <div className="users-review">
                                <div className="love-by-users">
                                    <div className="users">Love by Users</div>
                                    <div className="icon">
                                        <img src={Images.BackwardcircleIcon} alt="" />
                                        <img src={Images.ForwardcircleIcon} alt="" />
                                    </div>
                                </div>
                                <div className="users-quotation-container">
                                    <div className="users-quotation-content">
                                        <img src={Images.QuotationIcon} className="quotation-img" alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                            vero eos psum dolor sit amet, consetetur sadipscing
                                    </p>
                                        <div className="users-details">
                                            <img src={Images.ProfileIcon} className="profile-img" alt="" />
                                            <div className="details">
                                                <div className="name">Jessica Joilie</div>
                                                <div className="user-location">Toronto</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-quotation-content">
                                        <img src={Images.QuotationIcon} className="quotation-img" alt="" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                            vero eos psum dolor sit amet, consetetur sadipscing
                                    </p>
                                        <div className="users-details">
                                            <img src={Images.ProfileIcon} className="profile-img" alt="" />
                                            <div className="details">
                                                <div className="name">Jessica Joilie</div>
                                                <div className="user-location">Toronto</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
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
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                </p>
                                <p>Phone Number: +9218301290/ 21872083912</p>
                                <p>Mail us at admin@renteasyapp</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default HomeServices;