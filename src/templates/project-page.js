import React from 'react';
import { graphql, Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Video from '../components/video';
import ProjectDescription from '../components/project-description'
import Slideshow from '../components/slideshow';
import WorkMenu from '../components/work-menu';

import logo from '../images/recess-logo-still.png'
import '../css/project-page.css'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      id
      vimeoVideoLink
      pressLink
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


// const ProjectPage = props => {
//     var projectTitle = props.data.contentfulProject.title;
//     var projectPressLink = props.data.contentfulProject.pressLink;
//     var copy = props.data.contentfulProject.copy;
//     var slideshowMedia = props.data.contentfulProject.slideshowMedia;
//     let hasVimeoVideo = false;
//     let videoSrcUrl = "";
    
    // let projectPageMedia;
    // if (props.data.contentfulProject.vimeoVideoLink) {
    //    hasVimeoVideo = true;
    //     videoSrcUrl = "https://player.vimeo.com/video/"
    //     videoSrcUrl += props.data.contentfulProject.vimeoVideoLink.split(".com/")[1]

    //         slideshowMedia.unshift(
    //             "vimeo video"

    //         )

    //     }

    //     projectPageMedia = (
                 
    //         <Slideshow
    //             slideshowMedia={slideshowMedia}
    //             projectTitle={projectTitle}
    //             hasVimeoVideo={hasVimeoVideo}
    //             videoSrcUrl={videoSrcUrl}
    //         />
    //     )

    

    // return (
    //         <div className='project-page-container'>
    //             <nav>
    //                 <div className="nav-bar">
    //                     <div className="back-to-work sidebarOpen">
    //                         <Link to="/work" className="sidebarOpen back-to-work-text">BACK TO WORK</Link>
    //                     </div>
    //                     <span className="logo navLogo">
    //                         <a href="/">
    //                             <img src={logo} />
    //                         </a>
    //                     </span>
    //                     <div className="menu" >
    //                         <div className="logo-toggle">
    //                             <span className="logo"></span>
    //                             {/* <i className='bx bx-x siderbarClose' onClick={this.toggle}></i> */}
    //                         </div>

    //                     </div>
    //                 </div>
    //             </nav>
    //             {projectPageMedia}
    //             <ProjectDescription 
    //                 projectTitle={projectTitle} 
    //                 projectPressLink = {projectPressLink}
    //                 copy = {copy}
    //             />
        
    //         </div>


    // )
// }

// export default ProjectPage;



class ProjectPage extends React.Component {

    constructor(props) {
        console.log('constructor')
        super(props)
     
        this.projectTitle = props.data.contentfulProject.title;
        this.projectPressLink = props.data.contentfulProject.pressLink;
        this.copy = props.data.contentfulProject.copy;
        this.slideshowMedia = props.data.contentfulProject.slideshowMedia;
        this.vimeoVideoLink = props.data.contentfulProject.vimeoVideoLink;
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
        if (this.state.hasVimeoVideo && ((this.slideshowMedia === null) || (this.slideshowMedia[0] != "vimeo video")) ) {
           
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
                {projectPageMedia}
                <ProjectDescription
                    projectTitle={this.projectTitle}
                    projectPressLink={this.projectPressLink}
                    copy={this.copy}
                />

            </div>


        )
    }


}



export default ProjectPage;