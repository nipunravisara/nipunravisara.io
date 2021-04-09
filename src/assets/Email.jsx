import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.625 7.5H9.375a5.625 5.625 0 00-5.625 5.625v18.75A5.625 5.625 0 009.375 37.5h26.25a5.625 5.625 0 005.625-5.625v-18.75A5.625 5.625 0 0035.625 7.5zm-26.25 3.75h26.25a1.875 1.875 0 011.875 1.875l-15 9.15-15-9.15a1.875 1.875 0 011.875-1.875zM37.5 31.875a1.875 1.875 0 01-1.875 1.875H9.375A1.875 1.875 0 017.5 31.875V17.4l14.025 8.569a1.876 1.876 0 001.875 0L37.5 17.4v14.475z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
