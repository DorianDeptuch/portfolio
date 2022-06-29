import React from "react"

export default function SquareSVG() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
            <stop
              stop-color="hsl(184, 74%, 44%)"
              stop-opacity="1"
              offset="0%"
            ></stop>
            <stop
              stop-color="hsl(332, 87%, 70%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <filter
            id="nnneon-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="17 8"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
          <filter
            id="nnneon-filter2"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="10 17"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g stroke-width="16" stroke="url(#nnneon-grad)" fill="none">
          <rect
            width="300"
            height="300"
            x="250"
            y="250"
            filter="url(#nnneon-filter)"
            rx="0"
            ry="0"
          ></rect>
          <rect
            width="300"
            height="300"
            x="262"
            y="250"
            filter="url(#nnneon-filter2)"
            opacity="0.25"
            rx="0"
            ry="0"
          ></rect>
          <rect
            width="300"
            height="300"
            x="238"
            y="250"
            filter="url(#nnneon-filter2)"
            opacity="0.25"
            rx="0"
            ry="0"
          ></rect>
          <rect width="300" height="300" x="250" y="250" rx="0" ry="0"></rect>
        </g>
      </svg>
    </div>
  )
}
