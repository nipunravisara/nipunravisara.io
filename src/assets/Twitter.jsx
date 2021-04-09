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
        d="M43.108 7.407a1.874 1.874 0 00-2.832-1.612 14.024 14.024 0 01-3.512 1.487 9.66 9.66 0 00-6.326-2.33 9.81 9.81 0 00-9.795 9.495A20.685 20.685 0 017.868 7.09a1.897 1.897 0 00-1.608-.685 1.872 1.872 0 00-1.472.937 9.892 9.892 0 00-.454 8.941l-.004.004a1.952 1.952 0 00-.928 1.666c-.003.276.013.551.05.824a9.723 9.723 0 002.94 6.211 1.87 1.87 0 00-.124 1.443 9.758 9.758 0 004.429 5.479 13.995 13.995 0 01-6.73.84 1.875 1.875 0 00-1.248 3.437 24.268 24.268 0 0013.144 3.865 23.977 23.977 0 0023.371-17.556 24.04 24.04 0 001.003-6.837l-.001-.375a10.817 10.817 0 002.873-7.877zm-6.2 6.022c-.31.366-.466.838-.437 1.316.018.31.016.621.016.914a20.294 20.294 0 01-.851 5.777 20.034 20.034 0 01-19.774 14.866c-1.61 0-3.216-.188-4.782-.564a17.775 17.775 0 005.517-2.931 1.875 1.875 0 00-1.128-3.35 6.015 6.015 0 01-4.151-1.751c.28-.053.558-.12.835-.198a1.876 1.876 0 00-.15-3.644 5.997 5.997 0 01-4.22-3.236c.34.047.68.075 1.023.087a1.914 1.914 0 001.843-1.306 1.875 1.875 0 00-.75-2.131 5.992 5.992 0 01-2.659-5.384 24.4 24.4 0 0015.392 6.525 1.914 1.914 0 001.532-.672 1.876 1.876 0 00.387-1.628 5.919 5.919 0 01-.163-1.366 6.056 6.056 0 016.05-6.05 5.97 5.97 0 014.396 1.913 1.86 1.86 0 001.727.559c.77-.15 1.529-.352 2.272-.604a12.53 12.53 0 01-1.924 2.858z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
