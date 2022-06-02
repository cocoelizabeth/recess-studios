import React, { useEffect, useRef } from 'react'

function Slide(props) {
    const slideRef = useRef(null)

    useEffect(() => {
        console.log("width", slideRef.current.offsetWidth);
    }, []);

    return (
        <div ref={slideRef} className='slide' style={styles.slide}>
        <img src={props.imgSrc}></img>
            {props.slideNumber}
        </div>
    )
}

export default Slide;

const styles = {
     slide: {
         width: 'auto',
         minHeight: '70vh',
         minWidth: '70%',
         backgroundColor: 'blue',
         border: '2px solid black',
         borderSizing: 'border-box'

     }
}