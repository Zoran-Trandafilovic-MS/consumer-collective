/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "default";
  className: any;
  assetsLogoClassName: any;
}

export const MastercardLogo = ({
  property1,
  className,
  assetsLogoClassName,
}: Props): JSX.Element => {
  return (
    <div className={`mastercard-logo ${className}`}>
      <div className={`assets-logo ${assetsLogoClassName}`}>
        <img className="fill" alt="Fill" src="/img/fill-1-1.svg" />

        <img className="img" alt="Fill" src="/img/fill-2-1.svg" />

        <img className="fill-2" alt="Fill" src="/img/fill-4-1.svg" />
      </div>
    </div>
  );
};

MastercardLogo.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
