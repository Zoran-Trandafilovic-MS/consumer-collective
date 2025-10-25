/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { UtilityArrowRight } from "../../icons/UtilityArrowRight";
import "./style.css";

interface Props {
  stateProp?: "hover" | "default";
  color?: "on-light";
  className: any;
  text: string;
  hoverUnderlineClassName?: any;
  hoverUnderline?: string;
  icon?: JSX.Element;
}

export const Tertiary = ({
  stateProp,
  color,
  className,
  text = "Tertiary Default",
  hoverUnderlineClassName,
  hoverUnderline = "/img/hover-underline-1.svg",
  icon = <UtilityArrowRight className="utility-arrow-right" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",

    color: color || "on-light",
  });

  return (
    <div
      className={`tertiary ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`base-button-tertiary ${state.state}`}>
        <div className="text-icon">
          <div className="button-text">
            <div className="text-wrapper">{text}</div>

            <img
              className={`hover-underline ${hoverUnderlineClassName}`}
              alt="Hover underline"
              src={hoverUnderline}
            />
          </div>

          {icon}
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Tertiary.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  color: PropTypes.oneOf(["on-light"]),
  text: PropTypes.string,
  hoverUnderline: PropTypes.string,
};
