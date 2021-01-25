import React, {Component} from 'react';
import { Link } from "react-router-dom";

import RouterOutlet  from './router-outlet';
import './index.scss';

class Account extends Component {
    render() {
      const {match} = this.props;
      return (
        <div className="account-container">
          <div className="Account-menu">
            <nav className="menus">
              <Link to={`${match.url}/dashboard`}>Dashboard</Link>
              <Link to={`${match.url}/view-profile`}>View Profile</Link>
              <Link to={`/`}> Back</Link>
            </nav>
          </div>
          <div className="content">
            <RouterOutlet  {...this.props}  />
          </div>
        </div>
      );
    }
}

export default Account;
