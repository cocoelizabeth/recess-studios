import React from "react"
import { useHorizontalScroll } from "./useHorizontalScroll";
const Video = ({ videoSrcUrl, projectTitle, ...props }) => {
    const scrollRef = useHorizontalScroll();
    return (
        <div className="video-container">
            <div className="video">
                <iframe
                    ref={scrollRef} 
                    src={videoSrcUrl}
                    title={projectTitle}
                    allow=" autoplay; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                // style={{ width: '80vw', position: 'absolute', height: "100%", top: 0}}
                />
            </div>
        </div>
    )

    }
export default Video

