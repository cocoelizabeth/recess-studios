import * as React from "react"
import { Link } from "gatsby"
import Header from "../../components/header";


class CareersThanks extends React.Component {
    constructor(props) {
        super(props)
        this.name = this.props.location.state.name;
        this.location = this.props.location.state.selectedJobLocation;
        this.jobTitle = this.props.location.state.selectedJobTitle;
    }


    render() {
        return (
            <div className="careers-container">
                <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
               <div className="thanks-container">
                    <h2 className="thank-you-h2">Thanks, {this.name}.</h2>
                    <p className="thank-you-text">
                        We have recieved your application for the {this.jobTitle} {" - "} {this.location} {" position."}
                    </p>
                    <Link className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
                </div>
            </div>
        )
    }

}



export default CareersThanks;