import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledContainer = styled.div`
  position: relative;
  ${"" /* height: 100vh; */}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(184, 74%, 44%);
  border-radius: 5px;
  max-width: 50vw;
  max-height: 100vh;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  height: 100%;

  .image {
    ${"" /* width: 1000px; */}
    ${"" /* height: 600px; */}
    border-radius: 10px;
    height: 50%;
    max-width: 100%;
    margin: auto;
    margin-bottom: 1rem;
    display: block;
  }

  .right-arrow,
  .left-arrow {
    position: absolute;
    top: 50%;
    font-size: 10rem;
    color: hsl(184, 74%, 44%);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    height: 5rem;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .right-arrow:hover,
  .left-arrow:hover {
    cursor: pointer;
    opacity: 70%;
    transform: scale(1.05);
  }

  .right-arrow {
    right: -7rem;
  }

  .left-arrow {
    left: -7rem;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(0.92);
  }
`

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: hsl(184, 74%, 44%);
    background: hsl(238, 80%, 14%);
    width: 100%;
    border-radius: 5px;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  a:hover {
    cursor: pointer;
    opacity: 70%;
    transform: scale(1.02);
  }
  button {
    padding-top: 1rem;
    color: inherit;
    background-color: inherit;
    border: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  p {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  p:hover {
    cursor: pointer;
  }
`

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: hsl(184, 74%, 44%);
  background: hsl(238, 80%, 14%);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;

  h5 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    width: 100%;
    max-width: 100%;
    font-size: 1.5rem;
  }
  & * {
    display: inline-block;
  }
`

const SliderData = [
  {
    title: "Facebook Clone",
    description:
      "Built with NextJS, Express, and MongoDB. This Facebook clone features a comprehensive notification system and GIPHY and YouTube APIs to add some fun to the social media experience.",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657053808/portfolio%20projects/PeekOdinBook-1_eutbql.gif",
    codeURL: "https://github.com/DorianDeptuch/odin-book",
    liveURL: "",
  },
  {
    title: "Reddit Clone",
    description:
      "Built with React and Firebase. Many of the features of the original Reddit site can be found in this clone.",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657149932/portfolio%20projects/STGRedditClone-1_mj0fbk.gif",
    codeURL: "https://github.com/DorianDeptuch/reddit-clone",
    liveURL: "https://doriandeptuch.github.io/reddit-clone/",
  },
  {
    title: "Shopping Cart SPA",
    description: "A climbing-based shopping page that utilizes React router",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657153566/portfolio%20projects/STGShoppingCart-3_kw4vqw.gif",
    codeURL: "https://github.com/DorianDeptuch/Shopping-Cart",
    liveURL: "https://doriandeptuch.github.io/Shopping-Cart/",
  },
  {
    title: "Where's Waldo Game",
    description:
      "A fun twist on the classis Where's Waldo Game. There are now multiple objects to find in this iteration of the game",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657153565/portfolio%20projects/STGWheresWaldo-3_yb9tcd.gif",
    codeURL: "https://github.com/DorianDeptuch/wheres-waldo",
    liveURL: "https://doriandeptuch.github.io/wheres-waldo/",
  },
  {
    title: "Memory Card Game",
    description:
      "A Pokemon based Memory card game that utilizes Data fetching in React that creates a memorable challenge.",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657149932/portfolio%20projects/STGMemoryCard-1_rmip5k.gif",
    codeURL: "https://github.com/DorianDeptuch/memory-card",
    liveURL: "https://doriandeptuch.github.io/memory-card/",
  },
  {
    title: "The Next Web CSS Clone",
    description:
      "Built with a mobile-first design philisophy using HTML and SCSS with an emphasis on responsive design",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657153566/portfolio%20projects/STGTNWClone-2_g3q6en.gif",
    codeURL: "https://github.com/DorianDeptuch/the-next-web-clone",
    liveURL: "https://doriandeptuch.github.io/the-next-web-clone/",
  },
  {
    title: "YouTube CSS Clone",
    description: "A 1:1 style clone of a YouTube video page",
    image:
      "https://res.cloudinary.com/dsykkv6uh/image/upload/v1657153566/portfolio%20projects/STGYouTubeClone-3_zle2sb.gif",
    codeURL: "https://github.com/DorianDeptuch/embedding-images-and-video",
    liveURL: "https://doriandeptuch.github.io/embedding-images-and-video/",
  },
]
// const SliderData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
//   },
// ]

const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const length = SliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null
  }

  return (
    <StyledContainer className="slider">
      <StyledDiv>
        <div className="left-arrow" onClick={prevSlide}>
          &#10094;
        </div>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div>
                  <img src={slide.image} alt="slider.title" className="image" />
                  <StyledTitleContainer>
                    <h5>{slide.title}</h5>
                    <p>{slide.description}</p>
                  </StyledTitleContainer>
                  <StyledLinkContainer>
                    <a href={slide.codeURL} target="_blank" rel="noreferrer">
                      <button>
                        <p>View Code</p>
                      </button>
                    </a>
                    <a href={slide.liveURL} target="_blank" rel="noreferrer">
                      <button>
                        <p>View Demo</p>
                      </button>
                    </a>
                  </StyledLinkContainer>
                </div>
              )}
            </div>
          )
        })}
        <div className="right-arrow" onClick={nextSlide}>
          &#10095;
        </div>
      </StyledDiv>
    </StyledContainer>
  )
}

export default Carousel
