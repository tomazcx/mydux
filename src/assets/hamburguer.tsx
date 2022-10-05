import React from "react";

function Hamburguer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g
        stroke="#780264"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        clipPath="url(#clip0_73_30)"
      >
        <path d="M5 16h22M5 8h22M5 24h22"></path>
      </g>
      <defs>
        <clipPath id="clip0_73_30">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Hamburguer;