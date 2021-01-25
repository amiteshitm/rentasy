import React, { Component, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

const Dashboard = React.lazy(() => import("./dashboard"));
const ViewProfile = React.lazy(() => import("./view-profile"));

class RouterOutlet extends Component {
  render() {
    const { match } = this.props;
    return (
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: 250 }}>
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={15000} //3 secs
            />
          </div>
        }
      >
        <Route
          path={`${match.url}/dashboard`}
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          path={`${match.url}/view-profile`}
          render={(props) => <ViewProfile {...props} />}
        />
        {/* Comment it out if Auto redirecttion is not required  */}
        <Redirect from="*" to={`${match.url}/dashboard`} />
      </Suspense>
    );
  }
}

export default RouterOutlet;
