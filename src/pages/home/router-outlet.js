import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "react-loader-spinner";

const HomeRentals = React.lazy(() => import("./home-rentals"));
const HomeServices = React.lazy(() => import("./home-services"));

function RouterOutlet(props) {
  const { match } = props;
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
        path={`${match.url}/rentals`}
        render={(props) => <HomeRentals {...props} />}
      />
      <Route
        path={`${match.url}/services`}
        render={(props) => <HomeServices {...props} />}
      />
    </Suspense>
  );
}

export default RouterOutlet;
