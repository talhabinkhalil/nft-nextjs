import React from 'react';

const PreviousIcon = ({ className, style, onClick }) => {
  return (
    <>
      <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        onClick={onClick}
      >
        <g filter="url(#filter0_d_23_1212)">
          <circle cx="34.1176" cy="31.1176" r="18.1176" fill="white" />
        </g>
        <g clipPath="url(#clip0_23_1212)">
          <path
            d="M28.5096 30.5117L35.4204 23.601C35.5802 23.441 35.7936 23.3529 36.0211 23.3529C36.2486 23.3529 36.462 23.441 36.6218 23.601L37.1307 24.1098C37.4619 24.4413 37.4619 24.9802 37.1307 25.3112L31.3276 31.1144L37.1372 36.924C37.297 37.0839 37.3853 37.2972 37.3853 37.5246C37.3853 37.7522 37.297 37.9655 37.1372 38.1255L36.6282 38.6342C36.4683 38.7942 36.255 38.8823 36.0275 38.8823C35.8 38.8823 35.5866 38.7942 35.4268 38.6342L28.5096 31.7173C28.3494 31.5568 28.2614 31.3425 28.2619 31.1148C28.2614 30.8861 28.3494 30.672 28.5096 30.5117Z"
            fill="#5142FC"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_23_1212"
            x="0"
            y="0"
            width="68.2354"
            height="68.2354"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.185972 0 0 0 0 0.327025 0 0 0 0 0.429167 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_23_1212"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_23_1212"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_23_1212">
            <rect
              width="15.5294"
              height="15.5294"
              fill="white"
              transform="matrix(-1 0 0 1 40.5881 23.3529)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default PreviousIcon;
