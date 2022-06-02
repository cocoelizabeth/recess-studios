import React from "react"
import { Link } from "gatsby"
import { useHorizontalScroll } from "./useHorizontalScroll";
import { GatsbyImage, getImage, getSrc, getSrcSet} from 'gatsby-plugin-image'
import '../css/project-page.css'

// UNUSED IMPORTS - DELETE THESE LIBRARIES WHEN PROJECT IS COMPLETE
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'keen-slider/keen-slider.min.css'
// import KeenSlider from 'keen-slider'
// import { useKeenSlider } from 'keen-slider/react' 

const Slideshow = ({ slideshowMedia, projectTitle }) => {
    const scrollRef = useHorizontalScroll();
    let slides;
    // create all slides
    slides = slideshowMedia.map((imageData, i) => {
        const image = getImage(imageData);
        const src = getSrc(imageData);
        const srcSet = getSrcSet(imageData);

        return (
            <img
                src={src}
                srcSet={srcSet}
                className="media-item"
            />
        )
    })

    return (
        <div ref = {scrollRef} className="project-media-container">
            {slides}
        </div>
    )

}

export default Slideshow;
