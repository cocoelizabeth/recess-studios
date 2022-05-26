import * as React from "react"
import logo from '../images/recess-logo-still.png'

class WorkMenu extends React.Component {
    constructor(props) {
        super(props);
        this.projects = this.props.projects;
        this.state = { visible: false }
        this.toggle = this.toggle.bind(this)
        this.handleMobileScroll = this.handleMobileScroll.bind(this);
    }

    componentDidMount() {
        this.handleMobileScroll()
    }

    toggle() {
        if (this.state.visible) {
            this.setState({ visible: false });
        } else {
            this.setState({ visible: true });
        }
    }

    handleMobileScroll() {
        if (window.outerWidth < 1080) {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        }
    }



    // OLD JQUERY CODE -- TRYING ABOVE CODE BUT NEED TO TEST
    // findElements(tag, notValueArr) {

    //     let elements = document.getElementsByTagName(tag);
    //     console.log(elements);

    //     let found = [];
    //     for (let i = 0; i < elements.length; i++) {
    //         debugger

    //     }
    // }

    // handleMobileScroll() {

    //     this.findElements('a', ["#", "#0"]);

    //     if (window.outerWidth < 1080) {

    //         a[href*="#"]
    //             // Remove links that don't actually link to anything
    //             :not('[href="#"]')
    //             :not('[href="#0"]')
    //             .click(function (event) {
    //                 // On-page links
    //                 if (
    //                     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    //                     &&
    //                     location.hostname == this.hostname
    //                 ) {
    //                     // Figure out element to scroll to
    //                     var target = $(this.hash);
    //                     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //                     // Does a scroll target exist?
    //                     if (target.length) {
    //                         // Only prevent default if animation is actually gonna happen
    //                         event.preventDefault();
    //                         $('html, body').animate({

    //                             scrollTop: target.offset().top - 70
    //                         }, 1000, function () {
    //                             // Callback after animation
    //                             // Must change focus!
    //                             var $target = $(target);
    //                             $target.focus();
    //                             if ($target.is(":focus")) { // Checking if the target was focused
    //                                 return false;
    //                             } else {
    //                                 $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //                                 $target.focus(); // Set focus again
    //                             };
    //                         });
    //                     }
    //                 }
    //             });
    //     }
    // }


    render() {
        const completedProjectList = Object.values(this.props.projects);
        let projectLinks;
        // create all menu link items
        projectLinks = completedProjectList.map(project => {
            return (
                <li key={project.id}>
                    <a href={"#" + project.id}>{project.title}</a>
                </li>
            )
        })

        return (
            <nav className={(this.state.visible ? "active" : "")} >
                <div className="nav-bar">
                    <div className="our-work sidebarOpen">
                        <div className="sidebarOpen our-work-text" onClick={this.toggle}>OUR WORK</div>
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
                            {projectLinks}
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
            </nav>
        )
    }
}

export default WorkMenu;