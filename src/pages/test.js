import React from "react"
import { graphql } from "gatsby"
// import Layout from "components/layout"
import SEO from "components/seo"
import WavesCanvas from "components/WavesCanvas"

const Test = () => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    // <Layout location={location} title={siteTitle}>
    <>
      <SEO title="All posts" />
      <WavesCanvas />
    </>
    // </Layout>
  )
}

export default Test

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
