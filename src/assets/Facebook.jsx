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
        d="M28.35 9.975h3.525V4.013a48.953 48.953 0 00-5.137-.263c-5.1 0-8.588 3.113-8.588 8.813v4.912h-5.756v6.675h5.756v17.1h6.9v-17.1h5.738l.862-6.675h-6.6V13.22c0-1.969.525-3.244 3.3-3.244z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
