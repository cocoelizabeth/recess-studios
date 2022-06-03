import React from "react"
const Video = ({ videoSrcUrl, projectTitle, ...props }) => {

    return (
        <div className="video-container">
            <div className="video">
                <iframe
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

