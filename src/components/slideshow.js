import React, { useEffect } from "react"
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import Video from "./video"
import { getSrc, getSrcSet} from 'gatsby-plugin-image'
import '../css/project-page.css'


const Slideshow = ({ hasVimeoVideo, videoSrcUrl, slideshowMedia, projectTitle, ...props }) => {
    const scrollRef = useHorizontalScroll();
    let slides;

    useEffect(() => {
        //! Not Sure If I need this code
        // if (slideshowMedia) {
        //     slides = slideshowMedia.map((imageData, i) => {
        //         const src = getSrc(imageData);
        //         const srcSet = getSrcSet(imageData);

        //         if (imageData == "vimeo video") {
        //             return (
        //                 <Video
        //                     videoSrcUrl={videoSrcUrl}
        //                     projectTitle={projectTitle}
        //                     className="media-item"
        //                 />
        //             )
        //         } else {
        //             // add 10% margin if the first item in the slideshow is not a video
        //             let itemClass = (i === 0) ? "media-item margin-l-10p" : "media-item"
        //             return (
                       
        //                 <img
        //                     src={src}
        //                     srcSet={srcSet}
        //                     className = { itemClass }
        //                 />
        //             )
        //         }


        //     })
        // }
    });

    //* create all slides
    if (slideshowMedia) {
     
        slides = slideshowMedia.map((imageData, i) => {

            const src = getSrc(imageData);
            const srcSet = getSrcSet(imageData);

            if (imageData == "vimeo video") {
                return (
                    <Video
                        videoSrcUrl={videoSrcUrl}
                        projectTitle={projectTitle}
                        className="media-item"
                        key={projectTitle + i}
                    />
                )
            } else {
                // add 10% margin if the first item in the slideshow is not a video
                let itemClass = (i === 0) ? "media-item margin-l-10p" : "media-item"
                return ( 

                
                    <img
                        src={src}
                        srcSet={srcSet}
                        className={itemClass}
                        key={projectTitle + i}
                    />
                )
            }


        })
    }


    // if (hasVimeoVideo) {
    //     slides.unshift(
    //         <Video
    //             videoSrcURL = {props.videoSrcURL}
    //             projectTitle = {projectTitle}
    //             className = "media-item"
    //         />)
    // }

    return (
        <div ref = {scrollRef} className="project-media-container">
            {slides}
        </div>
    )

}

export default Slideshow;
