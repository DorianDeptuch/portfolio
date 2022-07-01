import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"

const StyledDiv = styled.div`
  scrollbar-color: transparent transparent;
  scrollbar-width: 0px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  #slideShowContainer {
    display: flex;
    flex-direction: row;
    height: 30rem;
    width: 95vw;
    padding: 1rem;
    background: transparent;
    overflow: hidden;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  #leftArrow,
  #rightArrow {
    ${"" /* flex-basis: 4%; */}
    align-items: center;
    justify-content: center;
    height: 4rem;
    align-self: center;
    text-align: center;
    line-height: 4rem;
    z-index: 5;
    border-radius: 5px;
  }
  #leftArrow {
    transform: translateX(4rem);
  }
  #rightArrow {
    transform: translateX(-4rem);
  }

  #leftArrow:hover,
  #rightArrow:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .unicode {
    font-size: 50px;
    color: white;
  }

  #slideShowImages {
    display: flex;
    /* position: absolute; */
    flex-direction: row;
    height: 90%;
    width: fit-content;
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    ${"" /* flex-basis: 90%; */}
    flex: 1;
    border: 2px solid black;
  }

  .imageDiv {
    padding: 0.1rem;
    box-shadow: inset rgba(255, 255, 255, 0.5) 0px 0px 50px 50px;
    scroll-snap-align: center;
    width: 10rem;
  }

  .emptyDiv {
    height: 400px;
    ${"" /* width: 200px; */}
    padding: 100px;
    background: radial-gradient(circle, gray 90%, rgba(255, 255, 255, 1) 100%);
  }

  img {
    display: block;
    object-fit: cover;
    /* max-height: 100%;
     */
    height: 400px;
    width: 700px;
    margin: 0 !important;
  }

  #navButtonDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    flex-basis: 100%;
  }

  .navButton {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: black;
    margin: 5px;
  }

  .navButton:hover {
    cursor: pointer;
    background: darkgray;
    background: white;
  }

  .blur {
    filter: blur(10px);
  }

  .selectedNav {
    background: white;
  }

  .active {
    border: black 5px solid;
  }
`

export default function Carousel() {
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://cdn.jsdelivr.net/gh/DorianDeptuch/ImageSlider/index.js"
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <StyledDiv>
      <div id="slideShowContainer">
        <div id="leftArrow">
          <i class="fas fa-chevron-left"></i>
          <p class="unicode">&#10094;</p>
        </div>
        <div id="slideShowImages">
          {/* <div class="blur emptyDiv"></div> */}
          <div class="imageDiv">
            <img
              id="first"
              class="img"
              src="https://images.unsplash.com/photo-1531859251814-c41e5d1e2863?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="imageDiv">
            <img
              id="second"
              class="blur img"
              src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="imageDiv">
            <img
              id="third"
              class="blur img"
              src="https://images.unsplash.com/photo-1604633791817-ddf1e6d2ff2d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="imageDiv">
            <img
              id="fourth"
              class="blur img"
              src="https://images.unsplash.com/photo-1609856609894-cac9276bdf99?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="imageDiv">
            <img
              id="fifth"
              class="blur img"
              src="https://images.unsplash.com/photo-1609699329259-7d06db383d72?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="imageDiv">
            <img
              id="sixth"
              class="blur img"
              src="https://images.unsplash.com/photo-1609717533806-24b022619f09?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="imageDiv">
            <img
              id="seventh"
              class="blur img"
              src="https://images.unsplash.com/photo-1554135717-157a963b6e14?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          {/* <div class="blur emptyDiv"></div> */}
        </div>
        <div id="rightArrow">
          <i class="fas fa-chevron-right"></i>
          <p class="unicode">&#10095;</p>
        </div>
        <div id="navButtonDiv">
          <a href="#first">
            <div class="selectedNav navButton"></div>
          </a>
          <a href="#second">
            <div class="navButton"></div>
          </a>
          <a href="#third">
            <div class="navButton"></div>
          </a>
          <a href="#fourth">
            <div class="navButton"></div>
          </a>
          <a href="#fifth">
            <div class="navButton"></div>
          </a>
          <a href="#sixth">
            <div class="navButton"></div>
          </a>
          <a href="#seventh">
            <div class="navButton"></div>
          </a>
        </div>
      </div>
    </StyledDiv>
  )
}
