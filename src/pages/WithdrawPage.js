import React, { useEffect } from "react";

const WithdrawPage = () => {
  useEffect(() => {
    document.title = "Withdraw";
  }, []);
  return <div>With draw Page</div>;
};

export default WithdrawPage;
