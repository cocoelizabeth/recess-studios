import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetaData"
import logoGif from "../images/recess-chrome-v2-optimized.gif"

export const SEO = ({ title, description, image, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${logoGif}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
            {children}
    </>
  )
}