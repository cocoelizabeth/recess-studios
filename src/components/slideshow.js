import React from "react"
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage, getImage, getSrc, getSrcSet} from 'gatsby-plugin-image'
import '../css/project-page.css'

import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react' 
import { useHorizontalScroll } from "./useHorizontalScroll";


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
                // src={image.images.fallback.src}
                // style={{ maxWidth: 'calc((70vh/5)*4)', minWidth: 'calc((70vh/5)*4)'}}
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




// const Slideshow = ({ slideshowMedia, projectTitle }) => {
//     const [loaded, setLoaded] = React.useState(0);
//     // const [currentSlide, setCurrentSlide] = React.useState(0);
//     // const [visibleSlides, setVisibleSlides] = React.useState(0);
//     const [sliderRef] = useKeenSlider({
//         initial: 0,
//         mode: "snap",
//         slides: {
//             perView: "2",
//             // origin: "center",
//             spacing: 10,
//         }
//     });

//     let slides;


//     // create all slides
//     slides = slideshowMedia.map((imageData, i) => {
//         const image = getImage(imageData);
//         const src = getSrc(imageData);
//         const srcSet = getSrcSet(imageData);

//         return (
//             <div className="keen-slider__slide">
//                 <img
//                     src={src}
//                     srcSet={srcSet}
//                 // src={image.images.fallback.src}
//                 // style={{ maxWidth: 'calc((70vh/5)*4)', minWidth: 'calc((70vh/5)*4)'}}
//                 />

//         </div>


//         )
//     })


//     return (
//         <div ref={sliderRef} className="keen-slider">
//             { slides }
//         </div>
//     )

// }



// export default Slideshow;

// REACT SLICK SLIDER
// class Slideshow extends React.Component {
//     constructor(props) {
//         super(props)
//         this.slideshowMedia = this.props.slideshowMedia;
//         this.projectTitle = this.props.projectTitle;

//     }
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             arrows: false,
//             dots: true,
//             // centerMode: true,
//             // centerPadding: '30%',
//             infinite: false,
//         };

//         let slides;
//         // create all menu link items
//         slides = this.slideshowMedia.map((imageData, i) => {
//             const image = getImage(imageData);
//             return (
//                 <GatsbyImage
//                     image={image}
//                     alt={this.projectTitle}
//                 />
//             )
//         })

//         console.log(slides)

//         return (
//             <Slider {...settings}>
//                 {slides}
//             </Slider>
//         )
//     }

// }

// export default Slideshow;

// CUSTOM SLIDER
// import Slide from "./slide";

// class Slideshow extends React.Component {
//     constructor(props) {
//         super(props)
//         this.slideshowMedia = this.props.slideshowMedia;
//         this.projectTitle = this.props.projectTitle;
//         this.elementRef = React.createRef();
//         this.state = {
//             currentSlide: 0
//         } 

//     }

//     handleNext = () => {
//         if (this.state.currentSlide < this.slideContainer.children.length-1 ) {
//             let newCurrentSlide = this.state.currentSlide + 1;
//             this.setState({ currentSlide: newCurrentSlide }, () => {

//                 this.slideContainer.style.transitionDuration = "0.5s";
//                 // tells slide how much to move
//                 let slideWidth = "";
//                 debugger
//                 this.slideContainer.style.transform = `translate(-${350 * this.state.currentSlide}px)`;
//             })
//         } else {
//             return
//         }
//     }

//     handlePrevious = () => {

//     }
//     render() {

//         let slides;
//         // create all menu link items
//         slides = this.slideshowMedia.map((imageData, i) => {
//             const image = getImage(imageData);
//             return (
//                 <Slide slideNumber={i} imgSrc={image.images.fallback.src}/>
//                 // <GatsbyImage
//                 //     image={image}
//                 //     alt={this.projectTitle}
//                 // />
//             )
//         })

//         return (
//             <div>
       
//                 <div className="view-port" style={styles.view_port}>
//                     <button onClick={this.handlePrevious}>Previous</button>
//                     <button onClick={this.handleNext}>Next</button>
//                     <div ref={ refId => this.slideContainer = refId}className="slide-container" style={styles.slide_container}>
//                     {slides}
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default Slideshow;

// const styles = {
//     view_port : {
//         position: 'relative',
//         // top: '50%',
//         top: '70px',
//         left: '50%',
//         width: '100%',
//         height: 'fit-content',
//         backgroundColor: 'red',
//         transform: 'translate(-50%, 0%)',
//         overflow: 'hidden'
//     },
//     slide_container: {
//         display: 'flex',
//         flexDirection: 'row',
//         width: 'fit-content'
//     }
// }

