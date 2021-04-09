import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={44}
      height={45}
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.083 16.873a9.759 9.759 0 00-4.703 1.209 1.868 1.868 0 00-.672-.878 1.803 1.803 0 00-1.041-.33h-7.334c-.24-.001-.479.047-.701.142a1.83 1.83 0 00-.595.406c-.17.174-.306.38-.398.608-.092.228-.14.472-.139.718v22.5a1.912 1.912 0 00.537 1.326 1.827 1.827 0 001.296.55h7.334a1.797 1.797 0 001.296-.55c.17-.174.306-.38.398-.608.092-.228.14-.472.139-.718V30.936c0-.498.193-.975.537-1.326.344-.352.81-.55 1.296-.55.487 0 .953.198 1.297.55.344.351.537.828.537 1.326v10.312a1.912 1.912 0 00.536 1.326 1.828 1.828 0 001.297.55h7.333a1.798 1.798 0 001.297-.55 1.912 1.912 0 00.537-1.326V27.186a10.446 10.446 0 00-2.957-7.289 9.984 9.984 0 00-7.127-3.024zm6.417 22.5h-3.667v-8.437a5.69 5.69 0 00-1.61-3.978 5.439 5.439 0 00-3.89-1.647 5.439 5.439 0 00-3.889 1.647 5.69 5.69 0 00-1.61 3.978v8.437h-3.667v-18.75h3.666v1.318c0 .389.119.768.339 1.085.22.317.53.556.888.684.359.13.747.14 1.113.034.365-.107.688-.328.926-.63a6.38 6.38 0 013.228-2.23 6.25 6.25 0 013.893.104 6.4 6.4 0 013.11 2.398 6.632 6.632 0 011.17 3.8v12.187zm-25.667-22.5H5.5c-.24 0-.48.048-.702.142a1.831 1.831 0 00-.595.407 1.91 1.91 0 00-.537 1.326v22.5a1.911 1.911 0 00.537 1.326 1.828 1.828 0 001.297.55h7.333a1.798 1.798 0 001.297-.55 1.912 1.912 0 00.537-1.326v-22.5a1.911 1.911 0 00-.537-1.326 1.831 1.831 0 00-.595-.407 1.796 1.796 0 00-.702-.142zM11 39.373H7.333v-18.75H11v18.75zM9.194 2.891a5.806 5.806 0 00-2.363.348A5.905 5.905 0 004.795 4.51a6.062 6.062 0 00-1.381 1.991 6.179 6.179 0 00-.041 4.782c.31.758.768 1.444 1.346 2.015a5.91 5.91 0 002.015 1.309 5.807 5.807 0 002.356.39h.052a5.81 5.81 0 002.368-.35 5.908 5.908 0 002.04-1.28 6.065 6.065 0 001.378-2 6.18 6.18 0 00.02-4.794 6.068 6.068 0 00-1.361-2.013 5.91 5.91 0 00-2.029-1.298 5.808 5.808 0 00-2.364-.372zm-.052 8.357H9.09c-.317.04-.639.009-.944-.09a2.228 2.228 0 01-.822-.48 2.29 2.29 0 01-.556-.784 2.336 2.336 0 01-.188-.95c0-1.398 1.025-2.303 2.614-2.303.32-.043.646-.016.955.08.309.095.594.258.837.476.243.218.437.487.57.789.132.301.2.628.198.959 0 1.399-1.026 2.303-2.612 2.303z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;