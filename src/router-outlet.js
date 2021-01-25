import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from 'react-loader-spinner'

const Pages = React.lazy(() => import("./pages/"));
const SuccessfullMsg = React.lazy(() => import("./pages/success-msg"));
const SuccessfullMsg1 = React.lazy(() => import("./pages/success-msg1"));

function RouterOutlet(props) {
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
      <Route path="/" render={(props) => <Pages {...props} />} />
      <Route
        path="/success-msg"
        render={(props) => <SuccessfullMsg {...props} />}
      />
      <Route
        path="/success-msg1"
        render={(props) => <SuccessfullMsg1 {...props} />}
      />
    </Suspense>
  );
}

export default RouterOutlet;
