import * as React from "react"
import { Link } from "gatsby"
import Header from "../../components/header";


// const CareersThanks = ({ location }) => {
    
//     let dataArray = location.search.split("?");
//     let data = {};
//     dataArray.map( d => {
//         if (d != "") {
//             let pair = d.split("=");
//             let key = pair[0];
//             let formattedVal = pair[1].split("-").join(" ");
//             data[key] = formattedVal
           
//         }
//     })

//     return (
//          if (this.state.name != "") {
//                      let name = this.props.location.state.name;
//                     let location = this.props.location.state.selectedJobLocation;
//                     let jobTitle = this.props.location.state.selectedJobTitle;
//                     return (
//                         <div className="careers-container">
//                             <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
//                             <div className="thanks-container">
//                                 <h2 className="thank-you-h2">Thanks, {this.state.name}.</h2>
//                                 <p className="thank-you-text">
//                                     We have recieved your application for the {this.state.jobTitle} {" - "} {this.state.location} {" position."}
//                                 </p>
//                                 <Link className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
//                             </div>
//                         </div>
//                     )
//             } else {
//                 return (
//                     <div className="careers-container">
//                         <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>
//                         <div className="thanks-container">
//                             {/* <h2 className="thank-you-h2">LOADING</h2>
//                             <p className="thank-you-text">
//                                 We have recieved your application for the {this.jobTitle} {" - "} {this.location} {" position."}
//                             </p> */}
//                                 <Link className="display-none" ref={this.redirectRef} className="underline-link" to="/careers/">RETURN TO CAREERS</Link>
//                         </div>
//                     </div>
//                 )
//             }
//     )




// }

// export default CareersThanks;

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