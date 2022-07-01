import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Specialties from "../components/Specialties"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { BACKGROUND, PRIMARY, SECONDARY } from "../config/config"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    {/* <Specialties /> */}
    <div style={{ backgroundColor: PRIMARY }}>
      <Projects />
    </div>
    <div style={{ backgroundColor: BACKGROUND }}>
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
