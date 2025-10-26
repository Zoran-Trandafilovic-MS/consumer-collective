import React, { useState, useEffect } from "react";
import { MastercardLogo } from "../../components/MastercardLogo";
import { HeroiconsOutlineArrowLeftCircle3 } from "../../icons/HeroiconsOutlineArrowLeftCircle3";
import { HeroiconsOutlineArrowLeftCircle4 } from "../../icons/HeroiconsOutlineArrowLeftCircle4";
import "./style.css";

export const PersonaCarousel = (): JSX.Element => {
  const [activePersona, setActivePersona] = useState<"jessica" | "jose">("jessica");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in content after mount
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleJoseClick = () => {
    setActivePersona("jose");
  };

  const handleJessicaClick = () => {
    setActivePersona("jessica");
  };

  return (
    <div className="element-MCC-intro" data-model-id="460:9396">
      {/* Background - always visible */}
      <div className="frame">
        <img
          className="rectangle"
          alt="Rectangle"
          src="/img/rectangle-986.svg"
        />

        <img
          className="chair-grey"
          alt="Chair grey"
          src="/img/chair-grey-1.svg"
        />
      </div>

      {/* Content that fades in */}
      <div className={`carousel-content ${showContent ? 'fade-in' : 'fade-out'}`}>
        <img className="frame-2" alt="Frame" src="/img/frame-1171280110.svg" />

        <img className="group" alt="Group" src="/img/group-1171278974.png" />

        <div className={`jessica ${activePersona === "jessica" ? "jessica-center" : "jessica-right"}`}
          onClick={activePersona === "jose" ? handleJessicaClick : undefined}
          style={{ cursor: activePersona === "jose" ? "pointer" : "default" }}
        >
          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper">Jessica P.</div>

              <div className="button-text">Planner</div>

              <div className="div">12%</div>
            </div>
          </div>

          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-2">Income</div>

              <div className="rectangle-wrapper">
                <div className="rectangle-2" />
              </div>
            </div>

            <div className="frame-4">
              <div className="text-wrapper-2">Tech Affinity</div>

              <div className="rectangle-wrapper">
                <div className="rectangle-3" />
              </div>
            </div>

            <div className="frame-4">
              <div className="text-wrapper-2">Risk Tolerance</div>

              <div className="rectangle-wrapper">
                <div className="rectangle-4" />
              </div>
            </div>

            <div className="frame-4">
              <div className="text-wrapper-2">Financial Services Interest</div>

              <div className="rectangle-wrapper">
                <div className="rectangle-5" />
              </div>
            </div>

            <div className="frame-4">
              <div className="text-wrapper-2">Mindset</div>

              <div className="rectangle-wrapper">
                <div className="rectangle-6" />
              </div>
            </div>
          </div>

          <div className="frame-5">
            <div className="buttons-selectors">
              <div className="text-wrapper-3">Balanced</div>
            </div>

            <div className="buttons-selectors">
              <div className="text-wrapper-3">Prepared</div>
            </div>

            <div className="buttons-selectors">
              <div className="text-wrapper-3">Cautious</div>
            </div>
          </div>

          <div className="text-icon">
            <div className="button-text-2">Explore Persona</div>
          </div>

          <div className="frame-6" />
        </div>

        {/* Jose Card */}
        <div className={`jose-card ${activePersona === "jose" ? "jose-card-center" : "jose-card-left"}`}
          onClick={activePersona === "jessica" ? handleJoseClick : undefined}
          style={{ cursor: activePersona === "jessica" ? "pointer" : "default" }}
        >
          <div className="jose-bottom-wrap">
            <div className="jose-copy-wrap">
              <div className="jose-text-wrapper">Jose E.</div>
              <div className="jose-button-text">Exploration</div>
              <div className="jose-div">7%</div>
            </div>
          </div>

          <div className="jose-frame">
            <div className="jose-frame-2">
              <div className="jose-text-wrapper-2">Income</div>
              <div className="jose-group">
                <div className="jose-rectangle" />
              </div>
            </div>

            <div className="jose-frame-2">
              <div className="jose-text-wrapper-2">Tech Affinity</div>
              <div className="jose-group">
                <div className="jose-rectangle-2" />
              </div>
            </div>

            <div className="jose-frame-2">
              <div className="jose-text-wrapper-2">Risk Tolerance</div>
              <div className="jose-group">
                <div className="jose-rectangle-3" />
              </div>
            </div>

            <div className="jose-frame-2">
              <div className="jose-text-wrapper-2">Financial Services Interest</div>
              <div className="jose-group">
                <div className="jose-rectangle-4" />
              </div>
            </div>

            <div className="jose-frame-2">
              <div className="jose-text-wrapper-2">Mindset</div>
              <div className="jose-group">
                <div className="jose-rectangle-5" />
              </div>
            </div>
          </div>

          <div className="jose-frame-3">
            <div className="jose-buttons-selectors">
              <div className="jose-text-wrapper-3">Innovative</div>
            </div>

            <div className="jose-buttons-selectors">
              <div className="jose-text-wrapper-3">Carefree spenders</div>
            </div>

            <div className="jose-buttons-selectors">
              <div className="jose-text-wrapper-3">Open-minded</div>
            </div>
          </div>

          <div className="jose-text-icon">
            <div className="jose-button-text-2">Explore Persona</div>
          </div>

          <div className="jose-frame-4" />
        </div>

        <img
          className="selected-generation"
          alt="Selected generation"
          src="/img/selected-generation.svg"
        />

        <HeroiconsOutlineArrowLeftCircle3 className="heroicons-outline" />
        <HeroiconsOutlineArrowLeftCircle4 className="heroicons-outline-arrow-left-circle-4" />
        <img
          className="element-result-in-total"
          alt="Element result in total"
          src="/img/2-result-in-total-1.svg"
        />

        <img
          className="loading-personas"
          alt="Loading personas"
          src="/img/loading-personas.svg"
        />

        <img
          className="ai-assistant"
          alt="Ai assistant"
          src="/img/ai-assistant.svg"
        />

        <div className="div-2" />

        <div className="top-nav">
        <div className="frame-7">
          <MastercardLogo
            assetsLogoClassName="design-component-instance-node"
            className="mastercard-logo-instance"
            property1="default"
          />
          <div className="text-wrapper-4">Consumer Collective</div>
        </div>

        <div className="frame-8">
          <div className="name-wrapper">
            <div className="name">T</div>
          </div>

          <div className="base-menu">
            <div className="utility-menu">
              <img
                className="vector-stroke"
                alt="Vector stroke"
                src="/img/vector-stroke.svg"
              />

              <img
                className="vector-stroke-2"
                alt="Vector stroke"
                src="/img/vector-stroke-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
