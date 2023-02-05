import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-10px mb-15px lg:mb-35px">
      {children}
    </div>
  );
};

export default FormGroup;
