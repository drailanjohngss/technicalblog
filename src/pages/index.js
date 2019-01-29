import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="hero">
      <div className="hero__main-text">
        Let's talk about&nbsp;<span className="hero__main-text--red">Tech</span>
      </div>
    </div>
    <div className="blog">
    {data.allMarkdownRemark.edges.map(post => (
      <Link
        key={post.node.id}
        to={post.node.frontmatter.path}>
        <div className="blog__item">
          <div className="blog__item-img">
          Image here
          </div>
          <div className="blog__item-title">
            <h3>{post.node.frontmatter.title}</h3>
          </div>

        </div>
      </Link>
    ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
   limit: 10
   sort: { fields: [frontmatter___date], order: ASC }
   filter: {frontmatter: { published: { eq:true } } }
 ) {
     edges {
       node {
         id
         frontmatter {
           path
           title
           date
         }
       }
     }
   }
  }
`

export default IndexPage
