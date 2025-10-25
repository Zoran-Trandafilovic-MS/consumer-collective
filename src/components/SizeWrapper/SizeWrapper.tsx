/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Size16 } from "../../icons/Size16";
import "./style.css";

interface Props {
  size: "sixteen";
}

export const SizeWrapper = ({ size }: Props): JSX.Element => {
  return <Size16 className="size" />;
};

SizeWrapper.propTypes = {
  size: PropTypes.oneOf(["sixteen"]),
};
