import React, { useContext, Suspense } from "react";
import { UserContext } from "./store/UserProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes.js";
// import TheHeader from "./controllers/TheHeader";
// import TheFooter from "./controllers/TheFooter";
// import "./assets/css/style.css";
// import "./assets/scss/style.scss";

export default function App() {
  const { user } = useContext(UserContext);
  const loading = (
    <div className="loader-body pt-3 text-center">LOADING...</div>
  );
  return (
    <div className="app">
      <Router>
        <div className="header">
          {/* <TheHeader /> */}
        </div>
        <div className="body">
          <Suspense fallback={loading}>
            <Routes>
              {routes
                .filter((e) => {
                  if (user.id) {
                    return e;
                  }
                  return e.exact === true;
                })
                .map((route, idx) => {
                  return (
                    route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={+route?.exact}
                        name={route.name}
                        element={<route.component />}
                      />
                    )
                  );
                })}
            </Routes>
          </Suspense>
        </div>
        {/* <TheFooter /> */}
      </Router>
    </div>
  );
}
