import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "frame-5" | "frame-6";
  className: any;
}

export const Component = ({ property1, className }: Props): JSX.Element => {
  return (
    <div className={`component ${property1} ${className}`}>
      <div className="ellipse" />

      <div className="div" />

      <div className="ellipse" />
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-5", "frame-6"]),
};
