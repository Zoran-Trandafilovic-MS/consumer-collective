import React from "react";
import { BaseEyebrowdot } from "../../components/BaseEyebrowdot";
import { Component } from "../../components/Component";
import { McIconAudienceHub1 } from "../../icons/McIconAudienceHub1";
import { McIconAudienceHub2 } from "../../icons/McIconAudienceHub2";
import "./style.css";

interface Props {
  onCardClick?: () => void;
}

export const SelectedGeneration = ({ onCardClick }: Props): JSX.Element => {
  return (
    <div className="selected-generation" data-model-id="409:19359">
      <div className="group">
        <div className="section-eyebrow">
          <BaseEyebrowdot className="base-eyebrowdot-desktop" />
          <div className="exploration-pathway">
            EXPLORATION PATHWAY&nbsp;&nbsp;/&nbsp;&nbsp;GENERATION MILLENNIALS
          </div>
        </div>

        <p className="text-wrapper">
          Support from the financial system and services
        </p>
      </div>

      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="frame">
        <div className="teaser-content cursor-pointer" onClick={onCardClick}>
          <div className="top-wrap">
            <McIconAudienceHub1 className="MC-icon-audience-hub" />
            <div className="frame-2" />
          </div>

          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper-2">Feel well-supported</div>

              <Component className="component-1" property1="frame-5" />
            </div>

            <div className="tertiary" style={{ marginTop: '-12px' }}>
              <div className="base-button-tertiary">
                <div className="text-icon">
                  <div className="button-text">
                    <div className="button-text-2">Show Personas</div>

                    <img
                      className="hover-underline"
                      alt="Hover underline"
                      src="/img/hover-underline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teaser-content cursor-pointer" onClick={onCardClick}>
          <div className="top-wrap">
            <McIconAudienceHub2 className="mc-icon-audience-hub-2" />
            <div className="frame-2" />
          </div>

          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper-2">Feel under-supported</div>
            </div>

            <div className="tertiary" style={{ marginTop: '-12px' }}>
              <div className="base-button-tertiary">
                <div className="text-icon">
                  <div className="button-text">
                    <div className="button-text-2">Show Personas</div>

                    <img
                      className="img"
                      alt="Hover underline"
                      src="/img/image.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
