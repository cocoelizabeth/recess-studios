//plugins 
import React from "react"
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
// stylesheets
import '../css/project-page.css'

const options = (copyReferences) => ({
    renderMark: {
        [MARKS.BOLD]: (text) => <b>{text}</b>,
        [MARKS.ITALIC]: (text, key) => <em key={key}>{text}</em>,
        [MARKS.UNDERLINE]: (text, key) => <u key={key}>{text}</u>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [INLINES.ENTRY_HYPERLINK]: (node, children) => {
            let entryType = node.data.target.internal.type;
            let text = children[0];
            let slug = node.data.target.slug;
            let link = "/work/" + slug
            return (
                <Link  to={link} className="underline" >{text}</Link>
            )
      
        },
    }
})



const ProjectDescription = ({ projectTitle, copy, projectPressLinks, copyReferences, ...props }) => {
  
    
    // LOGIC FOR DISPLAYING PRESS LINKS
   
    // initialize variables
    let pressLinkHeader;
    let pressLinksContainerClass;
    let pressLinks;

     // if press links exist, display the correct header (singular or plural)
    if (projectPressLinks.length > 1) {
        pressLinkHeader = "PRESS LINKS"
    } else if (projectPressLinks.length === 1) {
        
        pressLinkHeader = "PRESS LINK"
    } else {
        
        pressLinkHeader = "";
    }

    // if press links exist, map them. otherwise, dont diplay container
    if (projectPressLinks.length > 0) {
        pressLinksContainerClass ="project-press-links-container"
        pressLinks = projectPressLinks.map((pressLink, i) => {
            let source = pressLink.node.source;
            let title = pressLink.node.articleTitle;
            let link = pressLink.node.link;
            return (
                <div className='press-link'>
                    <a className='nav-links' href={link} target="_blank">{source}</a>
                </div>
            )
        })
    } else {
         pressLinksContainerClass ="display-none"
    }


    return (
        <div className="page-background project-page">
            <div className="project-info-container ">
                <div className="project-info-container-left">
                    <div className='pp-project-title'>
                        {projectTitle}
                    </div>
                    <div className={pressLinksContainerClass}>
                        <div className="press-link-header">{pressLinkHeader}</div>
                        {pressLinks}
                    </div>
                  
        
                </div>
                <div className="project-info-container-right">
                    <div className="pp-project-copy">
                        {renderRichText(copy, options(copyReferences))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDescription;

