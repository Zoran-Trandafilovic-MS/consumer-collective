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

            <div className="flex items-center gap-2 group cursor-pointer" style={{ marginTop: '-12px' }}>
              <span className="relative" style={{
                color: 'var(--gray-07)',
                fontFamily: 'var(--action-default-font-family)',
                fontSize: 'var(--action-default-font-size)',
                fontWeight: 'var(--action-default-font-weight)',
                letterSpacing: 'var(--action-default-letter-spacing)',
                lineHeight: 'var(--action-default-line-height)'
              }}>
                Select
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46965 2.13617C7.76254 1.84328 8.23742 1.84328 8.53031 2.13617L13.8636 7.46951C14.0043 7.61016 14.0833 7.80093 14.0833 7.99984C14.0833 8.19875 14.0043 8.38952 13.8636 8.53017L8.53031 13.8635C8.23742 14.1564 7.76254 14.1564 7.46965 13.8635C7.17676 13.5706 7.17676 13.0957 7.46965 12.8028L11.5227 8.74984L2.33331 8.74984C1.9191 8.74984 1.58331 8.41405 1.58331 7.99984C1.58331 7.58562 1.9191 7.24984 2.33331 7.24984L11.5227 7.24984L7.46965 3.19683C7.17676 2.90394 7.17676 2.42907 7.46965 2.13617Z" fill="#141413"/>
              </svg>
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

            <div className="flex items-center gap-2 group cursor-pointer" style={{ marginTop: '-12px' }}>
              <span className="relative" style={{
                color: 'var(--gray-07)',
                fontFamily: 'var(--action-default-font-family)',
                fontSize: 'var(--action-default-font-size)',
                fontWeight: 'var(--action-default-font-weight)',
                letterSpacing: 'var(--action-default-letter-spacing)',
                lineHeight: 'var(--action-default-line-height)'
              }}>
                Select
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46965 2.13617C7.76254 1.84328 8.23742 1.84328 8.53031 2.13617L13.8636 7.46951C14.0043 7.61016 14.0833 7.80093 14.0833 7.99984C14.0833 8.19875 14.0043 8.38952 13.8636 8.53017L8.53031 13.8635C8.23742 14.1564 7.76254 14.1564 7.46965 13.8635C7.17676 13.5706 7.17676 13.0957 7.46965 12.8028L11.5227 8.74984L2.33331 8.74984C1.9191 8.74984 1.58331 8.41405 1.58331 7.99984C1.58331 7.58562 1.9191 7.24984 2.33331 7.24984L11.5227 7.24984L7.46965 3.19683C7.17676 2.90394 7.17676 2.42907 7.46965 2.13617Z" fill="#141413"/>
              </svg>
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

            <div className="flex items-center gap-2 group cursor-pointer" style={{ marginTop: '-12px' }}>
              <span className="relative" style={{
                color: 'var(--gray-07)',
                fontFamily: 'var(--action-default-font-family)',
                fontSize: 'var(--action-default-font-size)',
                fontWeight: 'var(--action-default-font-weight)',
                letterSpacing: 'var(--action-default-letter-spacing)',
                lineHeight: 'var(--action-default-line-height)'
              }}>
                Select
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46965 2.13617C7.76254 1.84328 8.23742 1.84328 8.53031 2.13617L13.8636 7.46951C14.0043 7.61016 14.0833 7.80093 14.0833 7.99984C14.0833 8.19875 14.0043 8.38952 13.8636 8.53017L8.53031 13.8635C8.23742 14.1564 7.76254 14.1564 7.46965 13.8635C7.17676 13.5706 7.17676 13.0957 7.46965 12.8028L11.5227 8.74984L2.33331 8.74984C1.9191 8.74984 1.58331 8.41405 1.58331 7.99984C1.58331 7.58562 1.9191 7.24984 2.33331 7.24984L11.5227 7.24984L7.46965 3.19683C7.17676 2.90394 7.17676 2.42907 7.46965 2.13617Z" fill="#141413"/>
              </svg>
            </div>
          </div>

          <Component className="component-1" property1="frame-5" />
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

            <div className="flex items-center gap-2 group cursor-pointer" style={{ marginTop: '-12px' }}>
              <span className="relative" style={{
                color: 'var(--gray-07)',
                fontFamily: 'var(--action-default-font-family)',
                fontSize: 'var(--action-default-font-size)',
                fontWeight: 'var(--action-default-font-weight)',
                letterSpacing: 'var(--action-default-letter-spacing)',
                lineHeight: 'var(--action-default-line-height)'
              }}>
                Select
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37338] transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46965 2.13617C7.76254 1.84328 8.23742 1.84328 8.53031 2.13617L13.8636 7.46951C14.0043 7.61016 14.0833 7.80093 14.0833 7.99984C14.0833 8.19875 14.0043 8.38952 13.8636 8.53017L8.53031 13.8635C8.23742 14.1564 7.76254 14.1564 7.46965 13.8635C7.17676 13.5706 7.17676 13.0957 7.46965 12.8028L11.5227 8.74984L2.33331 8.74984C1.9191 8.74984 1.58331 8.41405 1.58331 7.99984C1.58331 7.58562 1.9191 7.24984 2.33331 7.24984L11.5227 7.24984L7.46965 3.19683C7.17676 2.90394 7.17676 2.42907 7.46965 2.13617Z" fill="#141413"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
