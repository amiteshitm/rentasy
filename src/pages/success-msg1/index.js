import React from 'react';
import { Images } from '../../assets/index';
import './index.scss';

function SuccessfullMsg1() {
    return (
        <>
            <div className="success-msg-page">
                <div className="success-msg-container">
                    <div className="success-msg-content">
                        <div className="success-msg">
                            <div className="success-div">Success!!</div>
                            <div className="item-div">
                                <p>
                                Our admin staff will be in touch with you shortly, to verify your business, and discuss details.

                                </p>
                            </div>
                            <div className="btn">
                                <button>Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SuccessfullMsg1;