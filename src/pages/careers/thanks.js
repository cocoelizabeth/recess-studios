import * as React from "react"
import { Link } from "gatsby"
import Header from "../../components/header";

// const CareersThanks = ({ location }) => {
//   const { state = {} } = location
//   debugger
//   const { modal } = state
//   return modal ? (
//     <dialog className="modal">I'm a modal of Some Page Component!</dialog>
//   ) : (
//     <div>Welcome to the Some Page Component!</div>
//   )
// }

// export default CareersThanks;

class CareersThanks extends React.Component {
    constructor(props) {
        super(props)
        debugger
        if (this.props.location.state === null) {
            this.props.location.state = {};
            this.props.location.state.name = "";
            this.props.location.state.selectedJobLocation = "";
            this.props.location.state.selectedJobTitle = "";
            this.state = {
                name: "",
                location: "",
                jobTitle: ""
            }
        } else {
            this.state = {
                name: this.props.location.state.name,
                location: this.props.location.state.selectedJobLocation,
                jobTitle: this.props.location.state.selectedJobTitle
            }
        }
        this.redirectRef = React.createRef();
    }

    componentDidMount() {
        if (this.state.name === "") {
            this.redirectRef.current.click();
        }

    }


    componentWillUnmount() {
        
    }



    render() {


        
            if (this.state.name != "") {
                    let name = this.props.location.state.name;
                    let location = this.props.location.state.selectedJobLocation;
                    let jobTitle = this.props.location.state.selectedJobTitle;
                    return (
                        <div className="careers-container">
                            <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
                            <div className="thanks-container">
                                <h2 className="thank-you-h2">Thanks, {this.state.name}.</h2>
                                <p className="thank-you-text">
                                    We have recieved your application for the {this.state.jobTitle} {" - "} {this.state.location} {" position."}
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
                            {/* <h2 className="thank-you-h2">LOADING</h2>
                            <p className="thank-you-text">
                                We have recieved your application for the {this.jobTitle} {" - "} {this.location} {" position."}
                            </p> */}
                                <Link className="display-none" ref={this.redirectRef} className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
                        </div>
                    </div>
                )
            }
        // return (
        //     <div className="careers-container">
        //         <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
        //         <div className="thanks-container">
        //             {/* <h2 className="thank-you-h2">Thanks, {this.name}.</h2>
        //             <p className="thank-you-text">
        //                 We have recieved your application for the {this.jobTitle} {" - "} {this.location} {" position."}
        //             </p> */}
        //             <Link className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
        //         </div>
        //     </div>
        // )
    }

}



export default CareersThanks;