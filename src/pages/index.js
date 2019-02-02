import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="hero">
      <div className="hero__main-text">
        <p>
            Let's talk about
        </p>
        <p className="hero__main-text--red">
            Tech
        </p>
      </div>
      <div className="hero__main-subtext">
        <p>
          Hi, I’m Drailan John Terrible and welcome to my blog page! This is where I write all my learnings and realization about different tools, methodologies, programming languages, techniques, philosopy and etc. Hope you enjoy reading!
        </p>
      </div>
    </div>
    <div className="blog-container">
      <div className="blog">
      {data.allMarkdownRemark.edges.map(post => (
        <Link
          key={post.node.id}
          to={post.node.frontmatter.path}>
          <div className="blog__item">
            <div className="blog__item-img">
              <Img className="blog-img" sizes={post.node.frontmatter.img.childImageSharp.sizes} />
            </div>
            <div className="blog__item-date">
              <span><i>{post.node.frontmatter.date}</i></span>
              <span>Drailan John D. Terrible</span>
            </div>
            <div className="blog__item-title">
              <h4>{post.node.frontmatter.title}</h4>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
   limit: 10
   sort: { fields: [frontmatter___date], order: DESC }
   filter: {frontmatter: { published: { eq:true } } }
 ) {
     edges {
       node {
         id
         frontmatter {
           path
           title
           date
           img {
               childImageSharp{
                   sizes(maxWidth: 630) {
                       ...GatsbyImageSharpSizes
                   }
               }
           }
         }
       }
     }
   }
  }
`

export default IndexPage
