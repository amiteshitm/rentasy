import React from 'react';
import { Images } from '../../assets/index';
import './index.scss';
import Header from '../../components/header';
import TextField from '@material-ui/core/TextField';

function AddItem1() {
    return (
        <>
            <div className="additem-page">
                <Header />
                <div className="additem-page-container">
                    <div className="list-content">
                        <div className="list-div">List your Business Service</div>
                        <div className="cancel">Cancel</div>
                    </div>
                    <div className="business-container">
                        <div className="business-content">
                            <TextField label='Full Name' placeholder='sourabh' type='text' fulwidth required />
                            <TextField label='Phone Number' placeholder='' type='number' fulwidth required />
                            <div className="textarea-div">
                                <TextField label='Description' placeholder='' type='text' fulwidth required />
                            </div>
                            <button type="Login" className="login-btn" fullwidth>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddItem1;