import React, {Component} from 'react';

import RouterOutlet  from './router-outlet';

class Pages extends Component {
    render() {
      return (
        <RouterOutlet {...this.props}  />
      );
    }
}

export default Pages;
