// import React, { useEffect, useRef, useState } from 'react'
// import logo from '../images/recess-logo-still.png'
// import { Link } from "gatsby";
// import '../css/header.css'
// import '../css/shop-header.css'
// import { useShoppingBag } from "../hooks/useShoppingBag";
// import ShoppingBag from './shopping-bag';
// import * as CLayer from 'commercelayer-react'
// import ShoppingBagNav from './shopping-bag-nav';
// // const ShopHeader = ({ open, close, leftText, background, leftTextLink, ...props}) => {
// //     const [status, setStatus] = useShoppingBag()
// //     const delayTimer = useRef(null)

    

// //     useEffect(() => {
// //         return window.clearInterval(delayTimer.current)
// //     })
// //     const handleOnClick = e => {    
// //         if (e.target.hasAttribute('disabled')) {
// //             return e.preventDefault()
// //         }
// //         delayTimer.current = window.setInterval(() => {
// //             setStatus()
// //             open=status;
// //         }, 1000)

// //         console.log(status)

// //     }
// //     return (
// //                         <nav className={background} >

// //                 <div className="nav-bar shop-nav-bar">
// //                     <div className="our-work sidebarOpen">
// //                         <div className="sidebarOpen left-text underline-link"><Link to={leftTextLink}>{leftText}</Link></div>
// //                     </div>
// //                     <span className="logo navLogo">
// //                         <a href="/">
// //                             <img src={logo} />
// //                         </a>
// //                     </span>
// //                     <div className="our-work sidebarOpen shop-nav-cart">
// //                         <div className="sidebarOpen left-text  shop-nav-cart" onClick={handleOnClick}>CART</div>
// //                     </div>

// //                 </div>


// //  </nav>
// //     )
// // }
// class ShopHeader extends React.Component {
//     constructor(props) {
//         super(props);
//         this.leftText = this.props.leftText;
//         this.background = this.props.background;
//         // this.projects = this.props.projects;
//         this.state = { 
//             cartVisible: this.props.open, }
//         this.toggle = this.toggle.bind(this)
//         this.leftTextLink = this.props.leftTextLink;

        
//         // this.handleMobileScroll = this.handleMobileScroll.bind(this);
//     }

//     // componentDidMount() {
//     //     this.handleMobileScroll()
//     // }

//     toggle() {
//         debugger
//         if (this.state.cartVisible) {
//             this.setState({ cartVisible: false });
//         } else {
//             this.setState({ cartVisible: true });
//         }
//     }

    

//     // handleMobileScroll() {
//     //     if (window.outerWidth < 1080) {
//     //         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     //             anchor.addEventListener('click', function (e) {
//     //                 e.preventDefault();
//     //                 document.querySelector(this.getAttribute('href')).scrollIntoView({
//     //                     behavior: 'smooth'
//     //                 });
//     //             });
//     //         });
//     //     }
//     // }


//     render() {
//         // const completedProjectList = Object.values(this.props.projects);
//         // let projectLinks;

//         // // create all menu link items
//         // projectLinks = completedProjectList.map(project => {
//         //     let hrefId = "#a".concat(project.id)
//         //     return (
//         //         <li key={project.id}>
//         //             <a href={hrefId}>{project.title}</a>
//         //         </li>
//         //     )
//         // })

//         return (
//             // CODE FOR WHEN WORK PAGE IS READY
//             // <nav className={(this.state.visible ? "active" : "") + " " + (this.props.background) } >
//             //     <div className="nav-bar">
//             //         <div className="our-work sidebarOpen">
//             //             <div className="sidebarOpen left-text underline-link" onClick={this.toggle}>{this.leftText}</div>
//             //         </div>
//             //         <span className="logo navLogo">
//             //             <a href="/">
//             //                 <img src={logo} />
//             //             </a>
//             //         </span>
//             //         <div className="menu" onClick={this.toggle}>
//             //             <div className="logo-toggle">
//             //                 <span className="logo"></span>
//             //                 {/* <i className='bx bx-x siderbarClose' onClick={this.toggle}></i> */}
//             //             </div>
//             //             <ul className="nav-links">
//             //                 {/* {projectLinks} */}
//             //                 <li key={"home"}>
//             //                  <Link to="/">Home</Link>
//             //                 </li>
//             //                 {/* <li key={"work"}>
//             //                     <Link to="/">Our Work</Link>
//             //                 </li> */}
//             //                 <li key={"work"}>
//             //                     <Link to="/">Careers</Link>
//             //                 </li>
//             //             </ul>
//             //             <div className="work-menu-footer">
//             //                 FOR BUSINESS INQUIRIES
//             //                 <br></br>
//             //                 <a className="underline-link" href="mailto:321@recessworld.com" title="mailto:321@recessworld.com" target="_blank" rel="noreferrer noopener">321@RECESSWORLD.COM</a>
//             //                 <br></br>
//             //                 <br></br>
//             //                 <a className="underline-link" href="https://www.instagram.com/recess.studios/" target="_blank">@RECESS.STUDIOS</a>
//             //             </div>
//             //         </div>
//             //     </div>


//             //     {/* <div className="nav-logo-btn">
//             //         <a href="/">
//             //             <img src={logo} />
//             //         </a>
//             //     </div> */}
//             // </nav>
//             // TEMPORARY CODE:
//             <div>
//                 <nav className={this.props.background} >

//                 <div className="nav-bar shop-nav-bar">
//                     <div className="our-work sidebarOpen">
//                         <div className="sidebarOpen left-text underline-link"><Link to={this.props.leftTextLink}>{this.leftText}</Link></div>
//                     </div>
//                     <span className="logo navLogo">
//                         <a href="/">
//                             <img src={logo} />
//                         </a>
//                     </span>
//                     <div className="our-work sidebarOpen shop-nav-cart">
//                         {/* <Link to={"/cart"}><div className="sidebarOpen left-text  shop-nav-cart">
//                         CART (<span><CLayer.ShoppingBagItemsCount /></span>)</div></Link> */}
//                         <div onClick={this.toggle} className="sidebarOpen left-text  shop-nav-cart">
//                             CART (<span><CLayer.ShoppingBagItemsCount /></span>)
//                         </div>
//                     </div>
                    
     
//                 </div>


//             </nav>

//             <ShoppingBagNav
//                open={this.state.cartVisible}
//                close={this.toggle}
//                >
      
//             </ShoppingBagNav>
//             </div>
    

//         )
//     }
// }

// export default ShopHeader;