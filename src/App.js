import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getTokens, logOut } from "utils/auth";

const LayoutDashboard = lazy(() => import("layout/LayoutDashboard"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));
const LayoutPayment = lazy(() => import("layout/LayoutPayment"));
const CheckoutPage = lazy(() => import("pages/CheckoutPage"));
const ShippingPage = lazy(() => import("pages/ShippingPage"));

// eslint-disable-next-line no-unused-vars
const customStyles = {
  content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};

const App = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("App ~ user", user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getTokens();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getTokens();
      if (refresh_token) {
        // Gọi lên server để lấy access_token mới
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({ user: undefined, accessToken: null }));
        logOut();
      }
    }
  }, [dispatch, user]);
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

        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
