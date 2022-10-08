import React from "react";

function Plane() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <g clipPath="url(#clip0_4_19)">
        <path
          stroke="#FCFCFC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M32.734 12.563l-5.25 4.937 5 13.75-3.75 3.75-7.468-10.938-3.782 3.438v3.75L13.734 35l-2.218-6.547-6.532-2.203 3.75-3.75h3.75l3.75-3.75-11.25-7.5 3.75-3.75 13.75 5 4.953-5.234-.109.078a3.757 3.757 0 015.313 5.312l.093-.094z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_4_19">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Plane;