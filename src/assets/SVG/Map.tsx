import React from "react";

function Map() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <g
        stroke="#FCFCFC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_4_28)"
      >
        <path d="M15 28.75l-10 2.5V8.75l10-2.5M25 33.75l-10-5V6.25l10 5v22.5zM25 11.25l10-2.5v22.5l-10 2.5"></path>
      </g>
      <defs>
        <clipPath id="clip0_4_28">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Map;