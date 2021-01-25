
import React from 'react';
import { Images } from '../../assets/index';
import './index.scss';
import Header from '../../components/header';
import TextField from '@material-ui/core/TextField';


function AddItem() {
    return (
        <>
            <div className="additem-page">
                <Header />
                <div className="additem-page-container">
                    <div className="test">
                        <div className="list-content">
                            <div className="list-div">Add Item Information</div>
                            <div className="cancel">Cancel</div>
                        </div>
                        <div className="business-container">
                            <div className="business-content">
                                <TextField label='Enter Title' placeholder='sourabh' type='text' fulwidth required />
                                <div className="textarea-div">
                                    <TextField label='Description' placeholder='' type='text' fulwidth required />
                                    <TextField label='Please add additional info on condition, and user requirements' placeholder='' type='text' fulwidth required />
                                </div>
                            </div>
                            <div className="upload-photo-container">
                                <h3 className="upload-photo-div">Upload Photo</h3>
                                <div className="photo-gallery">
                                    <div className="photos-content">
                                        <img src={Images.CameraIcon} className="camera-img" alt="" />
                                        <div className="take-picture">Take Picture</div>
                                    </div>
                                    <div className="photos-content">
                                        <img src={Images.CameraIcon} className="camera-img" alt="" />
                                        <div className="take-picture">Take Picture</div>
                                    </div>
                                    <div className="photos-content">
                                        <img src={Images.CameraIcon} className="camera-img" alt="" />
                                        <div className="take-picture">Take Picture</div>
                                    </div>
                                    <div className="photos-content">
                                        <img src={Images.CameraIcon} className="camera-img" alt="" />
                                        <div className="take-picture">Take Picture</div>
                                    </div>
                                    <div className="photos-content">
                                        <img src={Images.CameraIcon} className="camera-img" alt="" />
                                        <div className="take-picture">Take Picture</div>
                                    </div>
                                    <div className="photos-content">
                                        <img src={Images.CameraIcon} className="camera-img" alt="" />
                                        <div className="take-picture">Take Picture</div>
                                    </div>
                                </div>
                            </div>
                            <div className="set-price-container">
                                <h3 className="upload-photo-div">Set Price</h3>
                                <h4 className="set-daily-price">Please set daily price</h4>
                                <TextField label='Set Price' placeholder='' type='text' fulwidth required />
                                <div className="price-details">
                                    <h4 className="price">$10</h4>
                                    <h4 className="price">$15</h4>
                                    <h4 className="price">$20</h4>
                                    <h4 className="price">$25</h4>
                                    <h4 className="price">$30</h4>
                                    <h4 className="price">$50</h4>
                                    <h4 className="price">$75</h4>
                                    <h4 className="price">$100</h4>
                                </div>
                                <div className="late-charge">Select Late Charges</div>
                                <div className="penalty">
                                    <input type="radio" />
                                    <h4 className="daily-rate">Penalty- Daily Rate</h4>
                                </div>
                                <div className="penalty">
                                    <input type="radio" />
                                    <h4 className="daily-rate">Penalty- 2x Daily Rate</h4>
                                </div>
                            </div>
                            <div className="rental-details-container">
                                <h3 className="upload-photo-div">Rental Details</h3>
                                <div className="min-rental-container">
                                    <h4 className="min-rental">Minimum Rental (in days)</h4>
                                    <div className="add-minus-container">
                                        <img src={Images.MinusIcon} className="minus-img" alt="" />
                                        <div className="number">0</div>
                                        <img src={Images.AddIcon} className="minus-img" alt="" />
                                    </div>
                                </div>
                                <div className="min-rental-container">
                                    <h4 className="min-rental">Minimum Rental (in days)</h4>
                                    <div className="add-minus-container">
                                        <img src={Images.MinusIcon} className="minus-img" alt="" />
                                        <div className="number">0</div>
                                        <img src={Images.AddIcon} className="minus-img" alt="" />
                                    </div>
                                </div>
                                <div className="deposit-replace-container">
                                    <h4 className="min-rental">Deposit (in $)</h4>
                                    <div className="num">0</div>
                                </div>
                                <div className="deposit-replace-container">
                                    <h4 className="min-rental">Replacement (in $)</h4>
                                    <div className="num">0</div>
                                </div>
                                <div className="conditions">
                                    <h4 className="min-rental">Select the Condition</h4>
                                    <span>(Any one)</span>
                                </div>
                                <div className="condition-details">
                                    <div className="conditions-type">New</div>
                                    <div className="conditions-type">Excellent</div>
                                    <div className="conditions-type">Good</div>
                                    <div className="conditions-type">Fair</div>
                                    <div className="conditions-type">Need Attention</div>
                                </div>
                                <div className="min-rental-container">
                                    <div className="min-rental">Year of Purchase</div>
                                    <div className="year-div">
                                        <div className="year">Year</div>
                                        <img src={Images.CalenderIcon} alt="" />
                                    </div>
                                </div>
                                <div className="deposit-replace-container">
                                    <h4 className="min-rental">Delivery Charges (in $)</h4>
                                    <div className="num">0</div>
                                </div>
                                <div className="free-delivery">Make it Free Delivery</div>
                            </div>
                            <div className="other-details-container">
                                <div className="upload-photo-div">Other Details</div>
                                <div className="add-tags">
                                    <input type="text" placeholder="Add Tags for eg. Furniture" />
                                    <div className="add">Add</div>
                                </div>

                                <div className="different-sofa-colors">
                                    <div className="sofa-colors">
                                        <div className="sofa">Red Sofa</div>
                                        <img src={Images.CrossCircleIcon} alt="" />
                                    </div>
                                    <div className="sofa-colors">
                                        <div className="sofa">L-Shaped soft</div>
                                        <img src={Images.CrossCircleIcon} alt="" />
                                    </div>
                                </div>
                                <div className="location-container">
                                    <input type="text" placeholder="Select Location" />
                                    <img src={Images.LocationIcon} className="location-img" alt="" />
                                </div>
                                <button className="posted-item-btn">Post Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddItem;