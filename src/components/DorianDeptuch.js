import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const textAnimation = keyframes`
to {
  stroke-dashoffset: 0;
}
`

const shadowAnimation = keyframes`
  from {
    filter: none;
  }
  to {
    filter: drop-shadow(5px 5px #000);
  }
`
const fillAnimation = keyframes`
  from {
    fill: transparent
  }
  to {
    fill: "url(#linear)"
    ${"" /* fill:hsl(184, 74%, 44%); */}
  }
`

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  svg {
    animation: ${shadowAnimation} 0.5s ease forwards 5.5s;
  }

  g {
    animation: ${fillAnimation} 0.5s ease forwards 5.5s;
  }

  path:nth-child(1) {
    stroke-dasharray: 508;
    stroke-dashoffset: 508;
    animation: ${textAnimation} 2s ease forwards;
  }
  path:nth-child(2) {
    stroke-dasharray: 503;
    stroke-dashoffset: 503;
    animation: ${textAnimation} 2s ease forwards 2.1s;
  }
  path:nth-child(3) {
    stroke-dasharray: 488.059;
    stroke-dashoffset: 488.059;
    animation: ${textAnimation} 2s ease forwards 2.2s;
  }
  path:nth-child(4) {
    stroke-dasharray: 201;
    stroke-dashoffset: 201;
    animation: ${textAnimation} 2s ease forwards 2.3s;
  }
  path:nth-child(5) {
    stroke-dasharray: 435;
    stroke-dashoffset: 435;
    animation: ${textAnimation} 2s ease forwards 2.4s;
  }
  path:nth-child(6) {
    stroke-dasharray: 537;
    stroke-dashoffset: 537;
    animation: ${textAnimation} 2s ease forwards 2.5s;
  }
  path:nth-child(7) {
    stroke-dasharray: 508;
    stroke-dashoffset: 508;
    animation: ${textAnimation} 2s ease forwards 2.6s;
  }
  path:nth-child(8) {
    stroke-dasharray: 412;
    stroke-dashoffset: 412;
    animation: ${textAnimation} 2s ease forwards 2.7s;
  }
  path:nth-child(9) {
    stroke-dasharray: 399;
    stroke-dashoffset: 399;
    animation: ${textAnimation} 2s ease forwards 2.8s;
  }
  path:nth-child(10) {
    stroke-dasharray: 299;
    stroke-dashoffset: 299;
    animation: ${textAnimation} 2s ease forwards 2.9s;
  }
  path:nth-child(11) {
    stroke-dasharray: 430;
    stroke-dashoffset: 430;
    animation: ${textAnimation} 2s ease forwards 3s;
  }
  path:nth-child(12) {
    stroke-dasharray: 452;
    stroke-dashoffset: 452;
    animation: ${textAnimation} 2s ease forwards 3.1s;
  }
  path:nth-child(13) {
    stroke-dasharray: 475;
    stroke-dashoffset: 475;
    animation: ${textAnimation} 2s ease forwards 3.2s;
  }
`

export default function DorianDeptuch() {
  const [backgroundColor, setBackgroundColor] = useState("transparent")

  useEffect(() => {
    setTimeout(() => {
      setBackgroundColor("url(#linear)")
    }, 5500)
  }, [])

  return (
    <StyledDiv className="Logo">
      <svg
        id="DorianDeptuch"
        viewBox="0 0 1076 102"
        fill="url(#test)"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="hsl(184, 74%, 44%)" />
            <stop offset="100%" stop-color="hsl(332, 87%, 70%)" />
          </linearGradient>
        </defs>
        {/* <animate
          href="#linear"
          attributeName="stop-color"
          from="hsl(184, 74%, 44%)"
          to="hsl(332, 87%, 70%)"
          dur="1s"
          begin="3.5s"
          // fill="freeze"
        /> */}
        <g fill={backgroundColor}>
          <path
            d="M33.632 6.78399C43.36 6.78399 51.7654 8.61865 58.848 12.288C66.016 15.872 71.4774 21.0347 75.232 27.776C79.072 34.5173 80.992 42.4533 80.992 51.584C80.992 60.7147 79.072 68.6507 75.232 75.392C71.4774 82.048 66.016 87.168 58.848 90.752C51.7654 94.2507 43.36 96 33.632 96H5.85602V6.78399H33.632ZM33.632 86.4C45.152 86.4 53.9414 83.3707 60 77.312C66.0587 71.168 69.088 62.592 69.088 51.584C69.088 40.4907 66.016 31.8293 59.872 25.6C53.8134 19.3707 45.0667 16.256 33.632 16.256H17.504V86.4H33.632Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M136.804 96.896C128.527 96.896 120.975 94.976 114.148 91.136C107.321 87.2107 101.903 81.792 97.892 74.88C93.9667 67.8827 92.004 60.032 92.004 51.328C92.004 42.624 93.9667 34.816 97.892 27.904C101.903 20.9067 107.321 15.488 114.148 11.648C120.975 7.72265 128.527 5.75999 136.804 5.75999C145.167 5.75999 152.761 7.72265 159.588 11.648C166.415 15.488 171.791 20.864 175.716 27.776C179.641 34.688 181.604 42.5387 181.604 51.328C181.604 60.1173 179.641 67.968 175.716 74.88C171.791 81.792 166.415 87.2107 159.588 91.136C152.761 94.976 145.167 96.896 136.804 96.896ZM136.804 86.784C143.033 86.784 148.623 85.3333 153.572 82.432C158.607 79.5307 162.532 75.392 165.348 70.016C168.249 64.64 169.7 58.4107 169.7 51.328C169.7 44.16 168.249 37.9307 165.348 32.64C162.532 27.264 158.649 23.1253 153.7 20.224C148.751 17.3227 143.119 15.872 136.804 15.872C130.489 15.872 124.857 17.3227 119.908 20.224C114.959 23.1253 111.033 27.264 108.132 32.64C105.316 37.9307 103.908 44.16 103.908 51.328C103.908 58.4107 105.316 64.64 108.132 70.016C111.033 75.392 114.959 79.5307 119.908 82.432C124.943 85.3333 130.575 86.784 136.804 86.784Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M243.957 96L222.709 59.52H208.629V96H196.981V6.78399H225.781C232.522 6.78399 238.197 7.93599 242.805 10.24C247.498 12.544 250.997 15.6587 253.301 19.584C255.605 23.5093 256.757 27.9893 256.757 33.024C256.757 39.168 254.965 44.5867 251.381 49.28C247.882 53.9733 242.592 57.088 235.509 58.624L257.909 96H243.957ZM208.629 50.176H225.781C232.096 50.176 236.832 48.64 239.989 45.568C243.146 42.4107 244.725 38.2293 244.725 33.024C244.725 27.7333 243.146 23.6373 239.989 20.736C236.917 17.8347 232.181 16.384 225.781 16.384H208.629V50.176Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M286.504 6.78399V96H274.856V6.78399H286.504Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M359.092 76.16H320.18L313.012 96H300.724L332.98 7.29599H346.42L378.548 96H366.26L359.092 76.16ZM355.764 66.688L339.636 21.632L323.508 66.688H355.764Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M462.75 96H451.102L404.254 24.96V96H392.606V6.65599H404.254L451.102 77.568V6.65599H462.75V96Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M544.507 6.78399C554.235 6.78399 562.64 8.61865 569.723 12.288C576.891 15.872 582.352 21.0347 586.107 27.776C589.947 34.5173 591.867 42.4533 591.867 51.584C591.867 60.7147 589.947 68.6507 586.107 75.392C582.352 82.048 576.891 87.168 569.723 90.752C562.64 94.2507 554.235 96 544.507 96H516.731V6.78399H544.507ZM544.507 86.4C556.027 86.4 564.816 83.3707 570.875 77.312C576.934 71.168 579.963 62.592 579.963 51.584C579.963 40.4907 576.891 31.8293 570.747 25.6C564.688 19.3707 555.942 16.256 544.507 16.256H528.379V86.4H544.507Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M618.879 16.256V46.08H651.391V55.68H618.879V86.4H655.231V96H607.231V6.65599H655.231V16.256H618.879Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M732.504 32.896C732.504 40.32 729.944 46.5067 724.824 51.456C719.789 56.32 712.067 58.752 701.656 58.752H684.504V96H672.856V6.78399H701.656C711.725 6.78399 719.363 9.21599 724.568 14.08C729.859 18.944 732.504 25.216 732.504 32.896ZM701.656 49.152C708.141 49.152 712.92 47.744 715.992 44.928C719.064 42.112 720.6 38.1013 720.6 32.896C720.6 21.888 714.285 16.384 701.656 16.384H684.504V49.152H701.656Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M801.893 6.78399V16.256H777.573V96H765.925V16.256H741.477V6.78399H801.893Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M827.623 6.78399V63.232C827.623 71.168 829.543 77.056 833.383 80.896C837.308 84.736 842.727 86.656 849.639 86.656C856.466 86.656 861.799 84.736 865.639 80.896C869.564 77.056 871.527 71.168 871.527 63.232V6.78399H883.175V63.104C883.175 70.528 881.682 76.8 878.695 81.92C875.708 86.9547 871.655 90.7093 866.535 93.184C861.5 95.6587 855.826 96.896 849.511 96.896C843.196 96.896 837.479 95.6587 832.359 93.184C827.324 90.7093 823.314 86.9547 820.327 81.92C817.426 76.8 815.975 70.528 815.975 63.104V6.78399H827.623Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M898.254 51.328C898.254 42.624 900.217 34.816 904.142 27.904C908.067 20.9067 913.401 15.4453 920.142 11.52C926.969 7.59466 934.521 5.63199 942.798 5.63199C952.526 5.63199 961.017 7.97866 968.27 12.672C975.523 17.3653 980.814 24.0213 984.142 32.64H970.19C967.715 27.264 964.131 23.1253 959.438 20.224C954.83 17.3227 949.283 15.872 942.798 15.872C936.569 15.872 930.979 17.3227 926.03 20.224C921.081 23.1253 917.198 27.264 914.382 32.64C911.566 37.9307 910.158 44.16 910.158 51.328C910.158 58.4107 911.566 64.64 914.382 70.016C917.198 75.3067 921.081 79.4027 926.03 82.304C930.979 85.2053 936.569 86.656 942.798 86.656C949.283 86.656 954.83 85.248 959.438 82.432C964.131 79.5307 967.715 75.392 970.19 70.016H984.142C980.814 78.5493 975.523 85.1627 968.27 89.856C961.017 94.464 952.526 96.768 942.798 96.768C934.521 96.768 926.969 94.848 920.142 91.008C913.401 87.0827 908.067 81.664 904.142 74.752C900.217 67.84 898.254 60.032 898.254 51.328Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
          <path
            d="M1070.22 6.78399V96H1058.57V55.552H1013.13V96H1001.48V6.78399H1013.13V45.952H1058.57V6.78399H1070.22Z"
            // stroke="hsl(184, 74%, 44%)"
            stroke="url(#linear)"
            stroke-width="5"
            mask="url(#path-1-outside-1_2_5)"
          />
        </g>
      </svg>
    </StyledDiv>
  )
}
