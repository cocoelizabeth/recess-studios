import React from 'react';
import { graphql, Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import logo from '../images/recess-logo-still.png'
import '../css/project-page.css'




import WorkMenu from '../components/work-menu';
import Video from '../components/video';
import ProjectDescription from '../components/project-description'


export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      id
      vimeoVideoLink
      pressLink
      projectCopy {
          internal {
              content
          }
      }
      copy {
          raw
      }
      slideshowMedia {
          gatsbyImageData
          file {
              url
              contentType
          }
      }
      }
    }
`


const ProjectPage = props => {
    var projectTitle = props.data.contentfulProject.title;
    var projectPressLink = props.data.contentfulProject.pressLink;
    var projectCopy = props.data.contentfulProject.projectCopy.internal.content;
    var copy = props.data.contentfulProject.copy;
    let hasVimeoVideo = false;
    let videoSrcURL = "https://player.vimeo.com/video/";
    if (props.data.contentfulProject.vimeoVideoLink) {
       hasVimeoVideo = true;
        videoSrcURL += props.data.contentfulProject.vimeoVideoLink.split(".com/")[1]
    }
    console.log(copy)
    return (
        <div className='project-page-container'>
            <nav>
                <div className="nav-bar">
                    <div className="back-to-work sidebarOpen">
                        <Link to="/work" className="sidebarOpen back-to-work-text">BACK TO WORK</Link>
                    </div>
                    <span className="logo navLogo">
                        <a href="/">
                            <img src={logo} />
                        </a>
                    </span>
                    <div className="menu" >
                        <div className="logo-toggle">
                            <span className="logo"></span>
                            {/* <i className='bx bx-x siderbarClose' onClick={this.toggle}></i> */}
                        </div>

                    </div>
                </div>
            </nav>
            <Video
                videoSrcURL={videoSrcURL}
                videoTitle={projectTitle}
            />
            <ProjectDescription 
                projectTitle={projectTitle} 
                projectCopy={projectCopy}
                projectPressLink = {projectPressLink}
                copy = {copy}
            />
    
        </div>



    )
}

export default ProjectPage;



{/*             


                <object width="100%" height="100%" style={{ position: 'absolute', top: 0}}>
                    <param name="movie" value="https://player.vimeo.com/video/711002833?h=632bc15c0c" />
                    <param name="allowFullScreen" value="true" />
                    <param name="allowscriptaccess" value="always" />
                    <embed width="100vw" height="100%" src="https://player.vimeo.com/video/711002833?h=632bc15c0c" class="youtube-player" type="text/html" allowscriptaccess="always" allowfullscreen="true" />
                </object> */}

{/* <iframe src="https://player.vimeo.com/video/711002833?h=632bc15c0c" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */ }


{/* <div style={{ padding:'70px 0 0 56.25%'}}>
                    <iframe 
                        src="https://player.vimeo.com/video/711002833?h=632bc15c0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen 
                        style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                        title="AM1_Final-002_032122_4K">
                    </iframe>
                </div> */}
{/* <script src="https://player.vimeo.com/api/player.js"></script> */ }

{/* <iframe src="https://player.vimeo.com/video/711002833?h=632bc15c0c" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}