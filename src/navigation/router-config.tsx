import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CenterLoader } from "../utils/loaders";
import NotFound from "../components/NotFound";

const SignUp = React.lazy(() => import("../pages/SignUp"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const Home = React.lazy(() => import("../pages/Home"));

function RouterConfig() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={CenterLoader()}>
          <Routes>
            <Route path="accounts/email/signup" element={<SignUp />} />
            <Route path="accounts/login" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export { RouterConfig };
