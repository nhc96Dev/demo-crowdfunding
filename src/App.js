import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import CheckoutPage from "pages/CheckoutPage";
import ShippingPage from "pages/ShippingPage";

const LayoutDashboard = lazy(() => import("layout/LayoutDashboard"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));
const LayoutPayment = lazy(() => import("layout/LayoutPayment"));

// eslint-disable-next-line no-unused-vars
const customStyles = {
  content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>

        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
