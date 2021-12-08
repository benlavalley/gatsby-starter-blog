import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const somePage = ({ location, somepage }) => {
  return (
    <Layout location={location} title={somepage}>
      <Seo title={somepage} />
      <h1>I am a dynamic page called</h1>
      <h2>{somepage}</h2>
    </Layout>
  )
}

export default somePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
