import React from 'react';
import { Images } from '../../assets/index';
import './index.scss';

function SuccessfullMsg() {
    return (
        <>
            <div className="success-msg-page">
                <div className="success-msg-container">
                    <div className="success-msg-content">
                        <div className="success-msg">
                            <div className="success-div">Success!!</div>
                            <div className="item-div">Item posted successfully.</div>
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
export default SuccessfullMsg;