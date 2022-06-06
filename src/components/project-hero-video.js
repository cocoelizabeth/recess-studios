import React, { useEffect, useRef, useState } from "react"
import useElementOnScreen from "../hooks/useElementOnScreen";

const ProjectHeroVideo = ({ heroFileUrl }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    const isVisibile = useElementOnScreen(options, videoRef)
    // const onVideoClick = () => {
    //     if (playing) {
    //         videoRef.current.pause();
    //         setPlaying(!playing);
    //     } else {
    //         videoRef.current.play();
    //         setPlaying(!playing);
    //     }
    // };
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true)
            }
        }
        else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false)
            }
        }
    }, [isVisibile])


    return (
        <video playsInline muted loop width="100%" ref={videoRef}>
            <source src={heroFileUrl} type="video/mp4" />
        </video>
    );
};
export default ProjectHeroVideo;
