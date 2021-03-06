import React from "react"
import styled, { keyframes } from "styled-components"
import { device } from "../config/config"

const rotateCWAnimation = keyframes`
    from {
        transform: rotateZ(0deg)
    }
    to {
        transform: rotateZ(360deg)
    }
`

const rotateCCWAnimation = keyframes`
    from {
        transform: rotateZ(0deg)
    }
    to {
        transform: rotateZ(-360deg)
    }
`

const StyledDiv = styled.div`

  background-attachment: fixed;
  margin: 3rem;

  circle:nth-child(2),
  circle:nth-child(4),
  circle:nth-child(6),
  circle:nth-child(8) {
    animation: ${rotateCWAnimation} 60s infinite linear 6s;
    transform-origin: center;
  }

  circle:nth-child(1),
  circle:nth-child(3),
  circle:nth-child(5),
  circle:nth-child(7) {
    animation: ${rotateCCWAnimation} 60s infinite linear 6s;
    transform-origin: center;
  } 
  }

  @media only screen and ${device.tablet} {
    margin: 1rem 1rem 0 1rem;
  }
`

export default function HeroSVG() {
  return (
    <StyledDiv>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="ggglitch-grad"
          >
            <stop
              stop-color="hsl(184, 74%, 44%)"
              stop-opacity="1"
              offset="45%"
            ></stop>
            <stop
              stop-color="hsl(332, 87%, 70%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <clipPath id="SvgjsClipPath1034">
            <rect width="66.66666666666667" height="800" x="0" y="0"></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="133.33333333333334"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="266.6666666666667"
              y="0"
            ></rect>
            <rect width="66.66666666666667" height="800" x="400" y="0"></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="533.3333333333334"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="666.6666666666667"
              y="0"
            ></rect>
            <rect width="66.66666666666667" height="800" x="800" y="0"></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="933.3333333333334"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1066.6666666666667"
              y="0"
            ></rect>
            <rect width="66.66666666666667" height="800" x="1200" y="0"></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1333.3333333333335"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1466.6666666666667"
              y="0"
            ></rect>
            <rect width="66.66666666666667" height="800" x="1600" y="0"></rect>
          </clipPath>
          <clipPath id="SvgjsClipPath1035">
            <rect
              width="66.66666666666667"
              height="800"
              x="66.66666666666667"
              y="0"
            ></rect>
            <rect width="66.66666666666667" height="800" x="200" y="0"></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="333.3333333333333"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="466.6666666666667"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="600.0000000000001"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="733.3333333333334"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="866.6666666666667"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1000.0000000000001"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1133.3333333333333"
              y="0"
            ></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1266.6666666666667"
              y="0"
            ></rect>
            <rect width="66.66666666666667" height="800" x="1400" y="0"></rect>
            <rect
              width="66.66666666666667"
              height="800"
              x="1533.3333333333333"
              y="0"
            ></rect>
          </clipPath>
        </defs>
        <g stroke-width="45" stroke="url(#ggglitch-grad)" fill="none">
          <circle
            r="365"
            cx="400"
            cy="400"
            fill="none"
            opacity="0.25"
            clip-path='url("#SvgjsClipPath1034")'
          ></circle>
          <circle
            r="265"
            cx="400"
            cy="400"
            fill="none"
            opacity="0.25"
            clip-path='url("#SvgjsClipPath1034")'
          ></circle>
          <circle
            r="165"
            cx="400"
            cy="400"
            fill="none"
            opacity="0.25"
            clip-path='url("#SvgjsClipPath1034")'
          ></circle>
          <circle
            r="65"
            cx="400"
            cy="400"
            fill="none"
            opacity="0.25"
            clip-path='url("#SvgjsClipPath1034")'
          ></circle>
          <circle
            r="377.5"
            cx="400"
            cy="400"
            fill="none"
            clip-path='url("#SvgjsClipPath1035")'
          ></circle>
          <circle
            r="277.5"
            cx="400"
            cy="400"
            fill="none"
            clip-path='url("#SvgjsClipPath1035")'
          ></circle>
          <circle
            r="177.5"
            cx="400"
            cy="400"
            fill="none"
            clip-path='url("#SvgjsClipPath1035")'
          ></circle>
          <circle
            r="77.5"
            cx="400"
            cy="400"
            fill="none"
            clip-path='url("#SvgjsClipPath1035")'
          ></circle>
        </g>
      </svg>
    </StyledDiv>
  )
}
