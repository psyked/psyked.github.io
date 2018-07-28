import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Banner from '../components/Banner'
import Tiles from '../components/Tiles'
import Tags from '../components/Tags'
import SourcePost from '../components/SourcePost'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark || {}
    const { frontmatter: { title, tags, url, image, description } = {} } = post || {}
    const { frontmatter = {} } = post || {}
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { next, prev } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${title} | ${siteTitle}`} />
        <Banner {...frontmatter} />
        <div className="bodyContent">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr className="endPost" />
          <SourcePost url={url} />
          <Tags tags={tags} />
        </div>
        <Tiles tiles={[next, prev]} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      id
      html
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          url
          image {
            childImageSharp {
              sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
              }
            }
          }
          description
      }
    }
  }
`
