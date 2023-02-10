import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import { useSelector } from "react-redux";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
  }, [navigate, user]);
  if (user && user.email) return null;
  return (
    <div className="relative w-full min-h-screen p-6 bg-lite dark:bg-darkbg lg:p-10 isolate">
      <img
        src="./ellipse.png"
        alt="bg-authentication"
        className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 -z-[1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-60px">
        <img
          srcSet="./logo.png 2x"
          alt="crowdfunding-app"
          className="w-10 object-cover lg:w-[52px]"
        />
      </Link>
      <div className="w-full max-w-[327px] lg:max-w-[556px] bg-white dark:bg-darkSecondary rounded-10 py-30px px-5 lg:py-50px lg:px-60px mx-auto">
        <h1 className="text-lg font-semibold text-center lg:text-xl mb-5px lg:mb-10px text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
