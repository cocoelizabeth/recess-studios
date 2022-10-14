import * as React from "react"
import { Link } from "gatsby"
import Header from "../../components/header";

class CareersThanks extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.location.search === "") {
            this.state = {
                name: "",
                location: "",
                jobTitle: ""
            }
        } else {
            let dataArray = this.props.location.search.split("?");
            let data = {};
            dataArray.map( d => {
                if (d != "") {
                    let pair = d.split("=");
                    let key = pair[0];
                    let formattedVal = pair[1].split("-").join(" ");
                    data[key] = formattedVal
                }
            })
            this.state = {
                name: data.name,
                location: data.loc,
                jobTitle: data.pos
            }
        }
        this.redirectRef = React.createRef();
    }

    componentDidMount() {
        if (this.state.name === "") {
            this.redirectRef.current.click();
        }
    }

    render() {

            if (this.state.name != "") {
                    return (
                        <div className="careers-container">
                            <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
                            <div className="thanks-container">
                                <h2 className="thank-you-h2">Thanks, {this.state.name}.</h2>
                                <p className="thank-you-text">
                                    You have submitted your application for the {this.state.jobTitle} {" - "} {this.state.location} {" position."}
                                    Please check your email for a copy of your application.
                                </p>
                                <Link className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
                            </div>
                        </div>
                    )
            } else {
                return (
                    <div className="careers-container">
                        <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
                        <div className="thanks-container">
                                <Link className="display-none" ref={this.redirectRef} className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
                        </div>
                    </div>
                )
            }
    }
}

export default CareersThanks;