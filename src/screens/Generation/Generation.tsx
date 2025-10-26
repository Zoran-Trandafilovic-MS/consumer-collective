import React from "react";
import { BaseEyebrowdot } from "../../components/BaseEyebrowdot";
import { Component } from "../../components/Component";
import { SizeWrapper } from "../../components/SizeWrapper";
import { Tertiary } from "../../components/Tertiary";
import "./style.css";

interface Props {
  onMillennialsClick?: () => void;
}

export const Generation = ({ onMillennialsClick }: Props): JSX.Element => {
  return (
    <div className="generation" data-model-id="394:18616">
      <div className="group">
        <div className="section-eyebrow">
          <BaseEyebrowdot className="base-eyebrowdot-desktop" />
          <div className="exploration-pathway">
            EXPLORATION PATHWAY&nbsp;&nbsp;/&nbsp;&nbsp;GENERATION
          </div>
        </div>

        <div className="let-s-determine-the">Let&#39;s determine the age</div>
      </div>

      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="frame">
        <div className="teaser-content">
          <div className="top-wrap">
            <div className="image-placeholder" />

            <div className="frame-2" />
          </div>

          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper-2">Baby Boomers</div>

              <p className="text-wrapper-3">
                Generation born from 1945 to 1961.
              </p>
            </div>

            <div className="tertiary group cursor-pointer">
              <div className="base-button-tertiary">
                <div className="text-icon">
                  <div className="button-text">
                    <div className="button-text-2 relative">
                      Select
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teaser-content">
          <div className="top-wrap">
            <div className="image-placeholder-2" />

            <div className="frame-2" />
          </div>

          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper-2">Gen X</div>

              <p className="text-wrapper-3">
                Generation born from 1962 to 1979.
              </p>
            </div>

            <div className="tertiary group cursor-pointer">
              <div className="base-button-tertiary">
                <div className="text-icon">
                  <div className="button-text">
                    <div className="button-text-2 relative">
                      Select
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teaser-content cursor-pointer" onClick={onMillennialsClick}>
          <div className="top-wrap">
            <div className="image-placeholder-3" />

            <div className="frame-2" />
          </div>

          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper-2">Millennials</div>

              <p className="text-wrapper-3">
                Generation born from 1980 to 1994.
              </p>
            </div>

            <div className="tertiary group cursor-pointer">
              <div className="base-button-tertiary">
                <div className="text-icon">
                  <div className="button-text">
                    <div className="button-text-2 relative">
                      Select
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teaser-content">
          <div className="top-wrap">
            <div className="image-placeholder-4" />

            <div className="frame-2" />
          </div>

          <div className="bottom-wrap">
            <div className="copy-wrap">
              <div className="text-wrapper-2">Gen Z</div>

              <p className="text-wrapper-3">
                Generation born from 1995 to 2010.
              </p>
            </div>

            <div className="tertiary group cursor-pointer">
              <div className="base-button-tertiary">
                <div className="text-icon">
                  <div className="button-text">
                    <div className="button-text-2 relative">
                      Select
                      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
                    </div>
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
