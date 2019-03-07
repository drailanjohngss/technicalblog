import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Disqus from 'disqus-react';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  const disqusConfig = {
    title: post.frontmatter.title,
    url: `https://djtechblog.netlify.com/${post.frontmatter.path}/`
  }
  return (
    <Layout>
      <div className="post">
        <div
            className="post__title-container"
            style= {{
                backgroundImage: `url(${post.frontmatter.img.childImageSharp.sizes.src})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundPosition: `center`,
                position: `relative`,
                zIndex: 1,
                width: `100%`,
            }}
        >
            <h1 className="post__title">{post.frontmatter.title}</h1>
        </div>
        <div className="post__body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="post__body">
          <Disqus.DiscussionEmbed shortname="djtechblog" config={disqusConfig} />
        </div>
      </div>
    </Layout>
  )
}


export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        img {
            childImageSharp{
                sizes(maxWidth: 2400) {
                    src
                }
            }
        }
      }
    }
  }
`
