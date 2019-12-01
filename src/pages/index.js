import React from "react"
import { Link } from "gatsby"
import "../style.css"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi Simon</h1>
    <p>I have a 502 error T~T.</p>
    <p>I think I can paint my logo first. Haha.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/aya/">Go to aya</Link>
  </div>
)

export default IndexPage
