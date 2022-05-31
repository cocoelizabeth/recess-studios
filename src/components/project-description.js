//plugins 
import React from "react"
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// stylesheets
import '../css/project-page.css'

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b>{text}</b>,
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
    }
}

const ProjectDescription = ({ projectTitle, projectPressLink, copy, ...props }) => {

    return (
        <div className="page-background">
            <div className="project-info-container ">
                <div className="project-info-container-left">
                    <div className='pp-project-title'>
                        {projectTitle}
                    </div>
                    <div className='press-link'>
                        <a className='nav-links' href={projectPressLink} target="_blank">PRESS LINK</a>
                    </div>
                </div>
                <div className="project-info-container-right">
                    <div className="pp-project-copy">
                        {renderRichText(copy, options)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDescription;
