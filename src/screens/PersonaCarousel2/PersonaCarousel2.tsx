import React from "react";
import { Link } from "react-router-dom";
import { MastercardLogo } from "../../components/MastercardLogo";
import { HeroiconsOutlineArrowLeftCircle3 } from "../../icons/HeroiconsOutlineArrowLeftCircle3";
import { HeroiconsOutlineArrowLeftCircle4 } from "../../icons/HeroiconsOutlineArrowLeftCircle4";
import "./style.css";

export const PersonaCarousel2 = (): JSX.Element => {
  return (
    <div className="element-MCC-intro-screen" data-model-id="738:21578">
      <div className="frame-9">
        <img className="rectangle-7" alt="Rectangle" src="/img/image.svg" />

        <img
          className="chair-grey-2"
          alt="Chair grey"
          src="/img/chair-grey-1.svg"
        />

        <img
          className="frame-10"
          alt="Frame"
          src="/img/frame-1171280110-1.svg"
        />

        <img
          className="selected-generation-2"
          alt="Selected generation"
          src="/img/selected-generation-2.svg"
        />

        <HeroiconsOutlineArrowLeftCircle3 className="heroicons-outline-arrow-left-circle-3" />
        <HeroiconsOutlineArrowLeftCircle4 className="heroicons-outline-arrow-left-circle-4-instance" />
        <img
          className="element-result-in-total-2"
          alt="Element result in total"
          src="/img/2-result-in-total-1.svg"
        />

        <img
          className="loading-personas-2"
          alt="Loading personas"
          src="/img/loading-personas-2.svg"
        />

        <Link to="/persona-carousel">
          <img className="jessica-2" alt="Jessica" src="/img/jessica.svg" />
        </Link>

        <img className="jose-2" alt="Jose" src="/img/jose-1.svg" />

        <img
          className="ai-assistant-2"
          alt="Ai assistant"
          src="/img/ai-assistant-1.svg"
        />
      </div>

      <div className="div-3" />

      <div className="top-nav-2">
        <div className="frame-11">
          <MastercardLogo
            assetsLogoClassName="mastercard-logo-3"
            className="mastercard-logo-2"
            property1="default"
          />
          <div className="text-wrapper-5">Consumer Collective</div>
        </div>

        <div className="frame-12">
          <div className="div-wrapper">
            <div className="name-2">T</div>
          </div>

          <div className="utility-menu-wrapper">
            <div className="utility-menu-2">
              <img
                className="vector-stroke-3"
                alt="Vector stroke"
                src="/img/vector-stroke.svg"
              />

              <img
                className="vector-stroke-4"
                alt="Vector stroke"
                src="/img/vector-stroke-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
