import React from 'react';

const NextIcon = ({ className, style, onClick }) => {
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
        <g filter="url(#filter0_d_23_1218)">
          <circle
            cx="18.1176"
            cy="18.1176"
            r="18.1176"
            transform="matrix(-1 0 0 1 53 13)"
            fill="white"
          />
        </g>
        <g clipPath="url(#clip0_23_1218)">
          <path
            d="M40.4904 30.5117L33.5796 23.601C33.4198 23.441 33.2064 23.3529 32.9789 23.3529C32.7514 23.3529 32.538 23.441 32.3782 23.601L31.8693 24.1098C31.5381 24.4413 31.5381 24.9802 31.8693 25.3112L37.6724 31.1144L31.8628 36.924C31.703 37.0839 31.6147 37.2972 31.6147 37.5246C31.6147 37.7522 31.703 37.9655 31.8628 38.1255L32.3718 38.6342C32.5317 38.7942 32.745 38.8823 32.9725 38.8823C33.2 38.8823 33.4134 38.7942 33.5732 38.6342L40.4904 31.7173C40.6506 31.5568 40.7386 31.3425 40.7381 31.1148C40.7386 30.8861 40.6506 30.672 40.4904 30.5117Z"
            fill="#5142FC"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_23_1218"
            x="0.764648"
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
              result="effect1_dropShadow_23_1218"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_23_1218"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_23_1218">
            <rect
              width="15.5294"
              height="15.5294"
              fill="white"
              transform="translate(28.4119 23.3529)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default NextIcon;
