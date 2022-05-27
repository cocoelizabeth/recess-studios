import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow=" autoplay; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            // style={{ width: '80vw', position: 'absolute', height: "100%", top: 0}}
        />
    </div>
)
export default Video