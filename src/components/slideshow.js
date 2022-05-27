import React from "react"
import { Link } from "gatsby"

class Slideshow extends React.Component {
    constructor(props) {
        super(props)
        this.slideshowMedia = this.props.slideshowMedia;
        console.log(this.slideshowMedia)
    }
    render() {

        return (
            <div></div>
        )
    }

}

export default Slideshow;