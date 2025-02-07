import React from 'react';
import { graphql, Link} from 'gatsby'

import Video from '../components/video';
import ProjectDescription from '../components/project-description'
import Slideshow from '../components/slideshow';
import logo from '../images/recess-logo-still.png'
import '../css/project-page.css'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {

      title
      id
      vimeoVideoLink
      copy {
        references {
            slug
            contentful_id
            id
            internal {
                type
            }
        }
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
      allContentfulPressLink(
    filter: {project: {slug: {eq: $slug}}}
  ) {
    edges {
      node {
        id
        createdAt
        datePublished
        source
        articleTitle
        link
      }
    }
  }
    }
`

class ProjectPage extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.projectTitle = props.data.contentfulProject.title;
        this.copy = props.data.contentfulProject.copy;
        this.references = this.copy.references;
        this.slideshowMedia = props.data.contentfulProject.slideshowMedia;
        this.vimeoVideoLink = props.data.contentfulProject.vimeoVideoLink;
        this.pressLinks = props.data.allContentfulPressLink.edges;
        this.state = {
            hasVimeoVideo: this.hasVimeoVideo(),
            videoSrcUrl: this.videoSrcUrl(),
        }

    }

    videoSrcUrl() {
        console.log('videoSrcUrl()')
        if (this.vimeoVideoLink) {
            let url = "https://player.vimeo.com/video/"
            url += this.vimeoVideoLink.split(".com/")[1]
            return(url)
        } else {
            return("")
        }
    }

    hasVimeoVideo() {
        console.log('hasVimeoVideo()')
        if (this.vimeoVideoLink) {
            return (true)
        } else {
            return (false)
        }
    }

    setVimeoVideoLink () {
        console.log('SetVimeoVideoLink()')
        if (this.vimeoVideoLink) {
            let videoSrcUrl = "https://player.vimeo.com/video/"
            videoSrcUrl += this.vimeoVideoLink.split(".com/")[1]
            this.setState({
                hasVimeoVideo: true,
                videoSrcUrl: videoSrcUrl,
               
            })
        }
       
    }

    addVimeoVideo() {
        
        console.log('addVimeoVideo() ==> SLIDESHOWCOPY')
        if (this.state.hasVimeoVideo && ((this.slideshowMedia === null) || (this.slideshowMedia[0] !== "vimeo video")) ) {
           
            let slideshowCopy=this.slideshowMedia || [];
     
            slideshowCopy.unshift("vimeo video")
        
            
            return (
                slideshowCopy

            ) 
        } else {
            
            return (this.slideshowMedia)
        }
    }


    componentDidMount() {
        console.log('componentDidMount')
        console.log('this.state=' + this.state)
        // this.setVimeoVideoLink()
       
    }


    render ()   {
        
        let slideshowMedia = this.addVimeoVideo()
        let projectPageMedia = (
                 
            <Slideshow
                slideshowMedia={slideshowMedia}
                projectTitle={this.projectTitle}
                hasVimeoVideo={this.state.hasVimeoVideo}
                videoSrcUrl={this.state.videoSrcUrl}

            />
        )

        return (
            <div className='project-page-container'>
                <nav>
                    <div className="nav-bar">
                        <div className="back-to-work sidebarOpen">
                            <Link to="/work" className="sidebarOpen back-to-work-text">BACK TO WORK</Link>
                        </div>
                        <span className="logo navLogo">
                            <a href="/">
                                <img src={logo} alt="Logo for recess studios that looks like it is made out of chrome." />
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
                {projectPageMedia}
                <ProjectDescription
                    projectTitle={this.projectTitle}
                    copy={this.copy}
                    projectPressLinks={this.pressLinks}
                    copyReferences={this.references || []} 
                />

            </div>


        )
    }


}



export default ProjectPage;