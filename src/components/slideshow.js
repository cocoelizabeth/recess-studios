import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useHorizontalScroll } from "./useHorizontalScroll";
import Video from "./video"
import { GatsbyImage, getImage, getSrc, getSrcSet} from 'gatsby-plugin-image'
import '../css/project-page.css'

// UNUSED IMPORTS - DELETE THESE LIBRARIES WHEN PROJECT IS COMPLETE
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'keen-slider/keen-slider.min.css'
// import KeenSlider from 'keen-slider'
// import { useKeenSlider } from 'keen-slider/react' 

const Slideshow = ({ hasVimeoVideo, videoSrcUrl, slideshowMedia, projectTitle, ...props }) => {
    const scrollRef = useHorizontalScroll();
    let slides;

    useEffect(() => {
        // if (slideshowMedia) {
        //     slides = slideshowMedia.map((imageData, i) => {

        //         const image = getImage(imageData);
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
        //             return (
        //                 <img
        //                     src={src}
        //                     srcSet={srcSet}
        //                     className="media-item"
        //                 />
        //             )
        //         }


        //     })
        // }
        // Update the document title using the browser API

    });

    // create all image slides
    if (slideshowMedia) {
     
        slides = slideshowMedia.map((imageData, i) => {

            const image = getImage(imageData);
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
                let itemClass = "media-item";
                if (i===0) {
                    itemClass = "media-item margin-l-10p"
                } else {
                    itemClass ="media-item"
                }
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
