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
        d="M41.453 28.184a1.871 1.871 0 00-2.28 1.355 5.622 5.622 0 01-11.064-1.413V26.25h13.125a1.876 1.876 0 001.875-1.875 9.376 9.376 0 00-18.75 0v3.75a9.372 9.372 0 0018.45 2.336 1.872 1.872 0 00-1.356-2.278zm-7.719-9.433c1.488 0 2.915.588 3.972 1.635a5.71 5.71 0 011.31 2.115H28.455a5.615 5.615 0 015.28-3.75zm-3.75-5.625h7.5a1.875 1.875 0 000-3.75h-7.5a1.875 1.875 0 000 3.75zM18.581 21.97a7.474 7.474 0 00-5.472-12.594H3.734A1.874 1.874 0 001.86 11.25v24.375A1.875 1.875 0 003.734 37.5h10.313a8.423 8.423 0 004.534-15.53zM5.609 13.126h7.5a3.75 3.75 0 010 7.5h-7.5v-7.5zm8.438 20.625H5.609v-9.375h8.438a4.687 4.687 0 110 9.375z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
