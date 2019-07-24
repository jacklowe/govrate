import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="Spinner">
      <Loader type="TailSpin" color="#000000" height={40} width={40} />
    </div>
  );
};

export default Spinner;
