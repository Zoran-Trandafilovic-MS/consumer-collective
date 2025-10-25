import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const BaseEyebrowdot = ({ className }: Props): JSX.Element => {
  return <div className={`base-eyebrowdot ${className}`} />;
};
