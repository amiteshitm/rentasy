import React from 'react';
import { Images } from '../../../../assets';
import './index.scss';

function ItemLender() {
    return(
        <>
            <div className="view-profile-page">
                <div className="view-profile-container">
                    <div className="customer-important-list">
                        <div className="important-list-content">
                        <h3 className="user-div" >Lender</h3>
                            <div className="list-div">
                                <img src={Images.PlusprofileIcon} alt="" />
                                <h4>Post an Item</h4>
                            </div>
                            <div className="list-div">
                                <img src={Images.MyitemsIcon} alt="" />
                                <h4>My Items</h4>
                            </div>
                            <div className="list-div">
                                <img src={Images.WaitingconfirmationIcon} alt="" />
                                <h4>Waiting for Confirmation</h4>
                            </div>
                            <div className="list-div">
                                <img src={Images.CartprofileIcon} alt="" />
                                <h4>Ready for Checkout</h4>
                            </div>
                            <div className="list-div">
                                <img src={Images.TicksquareIcon} alt="" />
                                <h4>Active Rentals</h4>
                            </div>
                            <div className="list-div">
                                <img src={Images.HistoryIcon} alt="" />
                                <h4>History</h4>
                            </div>
                            <h3 className="user-div">Renter</h3>
                            <div className="list-div">
                                <img src={Images.CurrentrentallogoIcon} alt="" />
                                <h4>Current Rentals</h4>
                            </div>
                            <div className="list-div">
                                <img src={Images.HistoryIcon} alt="" />
                                <h4>History</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemLender;