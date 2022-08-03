import * as React from "react"
import logo from '../images/recess-logo-still.png'

import '../css/header.css'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.leftText = this.props.leftText;
        this.background = this.props.background;
        // this.projects = this.props.projects;
        this.state = { visible: false }
        this.toggle = this.toggle.bind(this)
        // this.handleMobileScroll = this.handleMobileScroll.bind(this);
    }

    // componentDidMount() {
    //     this.handleMobileScroll()
    // }

    toggle() {
        if (this.state.visible) {
            this.setState({ visible: false });
        } else {
            this.setState({ visible: true });
        }
    }

    // handleMobileScroll() {
    //     if (window.outerWidth < 1080) {
    //         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //             anchor.addEventListener('click', function (e) {
    //                 e.preventDefault();
    //                 document.querySelector(this.getAttribute('href')).scrollIntoView({
    //                     behavior: 'smooth'
    //                 });
    //             });
    //         });
    //     }
    // }


    render() {
        // const completedProjectList = Object.values(this.props.projects);
        // let projectLinks;

        // // create all menu link items
        // projectLinks = completedProjectList.map(project => {
        //     let hrefId = "#a".concat(project.id)
        //     return (
        //         <li key={project.id}>
        //             <a href={hrefId}>{project.title}</a>
        //         </li>
        //     )
        // })

        return (
            <nav className={(this.state.visible ? "active" : "") + " " + (this.props.background) } >
                <div className="nav-bar">
                    <div className="our-work sidebarOpen">
                        <div className="sidebarOpen left-text" onClick={this.toggle}>{this.leftText}</div>
                    </div>
                    <span className="logo navLogo">
                        <a href="/">
                            <img src={logo} />
                        </a>
                    </span>
                    <div className="menu" onClick={this.toggle}>
                        <div className="logo-toggle">
                            <span className="logo"></span>
                            {/* <i className='bx bx-x siderbarClose' onClick={this.toggle}></i> */}
                        </div>
                        <ul className="nav-links">
                            {/* {projectLinks} */}
                        </ul>
                        <div className="work-menu-footer">
                            FOR BUSINESS INQUIRIES & CAREER OPPORTUNITIES
                            <br></br>
                            <a className="underline-link" href="mailto:321@recessworld.com" title="mailto:321@recessworld.com" target="_blank" rel="noreferrer noopener">321@RECESSWORLD.COM</a>
                            <br></br>
                            <br></br>
                            <a className="underline-link" href="https://www.instagram.com/recess.studios/" target="_blank">@RECESS.STUDIOS</a>
                        </div>
                    </div>
                </div>

                {/* <div className="nav-logo-btn">
                    <a href="/">
                        <img src={logo} />
                    </a>
                </div> */}
            </nav>


        )
    }
}

export default Header;