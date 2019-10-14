/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  postDescription,
  lang = "en",
  meta,
  postTitle,
  slug,
  datePublished,
  isBlogPost,
  postImage,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            defaultImage
            author
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `
  )

  const title = postTitle || site.siteMetadata.title
  const description = postDescription || site.siteMetadata.description
  const image = postImage
    ? postImage
    : site.siteMetadata.defaultImage
  const url = slug
    ? `${site.siteMetadata.siteUrl}/${slug}/`
    : site.siteMetadata.siteUrl

  //const date = datePublished ? datePublished : false

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <html lang={lang} amp />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={site.siteMetadata.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={site.siteMetadata.social.twitter}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
     
    </React.Fragment>
  )
}

export default SEO
