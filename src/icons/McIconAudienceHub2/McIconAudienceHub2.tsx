import React from "react";

interface Props {
  className: any;
}

export const McIconAudienceHub2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`mc-icon-audience-hub-2 ${className}`}
      fill="none"
      height="58"
      viewBox="0 0 48 58"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#EDAAAC" height="48" rx="8" width="48" />

      <g className="g" filter="url(#filter0_d_409_19518)">
        <g className="g" filter="url(#filter1_d_409_19518)">
          <path
            className="path"
            d="M23.9479 19.2108C26.4914 19.2108 28.5533 17.1489 28.5533 14.6054C28.5533 12.0619 26.4914 10 23.9479 10C21.4044 10 19.3425 12.0619 19.3425 14.6054C19.3425 17.1489 21.4044 19.2108 23.9479 19.2108Z"
            fill="white"
          />

          <path
            className="path"
            d="M23.9424 20.4033C19.4341 20.4033 15.749 23.5241 15.491 27.4594H15.4876V27.515C15.4803 27.6428 15.4766 27.7715 15.4766 27.9009C15.4766 28.0303 15.4803 28.1589 15.4876 28.2867V37.998H32.4191V27.4594H32.3937C32.1357 23.5241 28.4505 20.4033 23.9424 20.4033Z"
            fill="white"
          />
        </g>
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="51.998"
          id="filter0_d_409_19518"
          width="40.9426"
          x="3.47656"
          y="6"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset className="fe-offset" dy="8" />

          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="6" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.368627 0 0 0 0 0.756863 0 0 0 0 0.647059 0 0 0 0.4 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_409_19518"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_409_19518"
            mode="normal"
            result="shape"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="43.998"
          id="filter1_d_409_19518"
          width="32.9426"
          x="7.47656"
          y="2"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset className="fe-offset" />

          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="4" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.160784 0 0 0 0 0.584314 0 0 0 0 0.462745 0 0 0 0.2 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_409_19518"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_409_19518"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
