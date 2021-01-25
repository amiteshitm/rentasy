import React from 'react';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './index.scss';
import { Images } from '../../assets/index';

function Login() {
    return (
        <>
            <div className="signup-page">
                <div className="signup-container">
                    <div className="signup-content">
                        <div className="signup">
                            <span>SignUp</span><hr />
                        </div>
                        <TextField label='Email Address' placeholder='sourabh.k@rejolut.com' fulwidth required />
                        <TextField label='password' placeholder='ghgbj' type='password' fulwidth required />
                        <TextField label='Repeat-password' placeholder='' type='password' fulwidth required />
                        {/* <div className="checkbox-password"> */}
                        <div className="checkbox-container">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                        </div>
                        <p>By creating an account you agree to our <a href="#" >Terms & Privacy.</a> </p>
                        <div className="btn-container">
                            <button className="cancel-btn">cancel</button>
                            <button className="signup-btn">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
