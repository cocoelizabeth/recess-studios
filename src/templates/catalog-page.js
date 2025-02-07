import React from 'react'
import { Link, graphql } from 'gatsby'
import backgroundImage from '../images/shop/shop-background.jpg'
import blackHoodie1 from '../images/shop/Black Hoodie 1.gif'
import blackHoodie2 from '../images/shop/Black Hoodie 2.gif'
import blackHoodie3 from '../images/shop/Black Hoodie 3.gif'
import blackTee from '../images/shop/Black Tee.gif'
import celeryHoodie from '../images/shop/Celery-Hoodie.gif'
import fondantHoodie from '../images/shop/Fondant-Hoodie.gif'
import naturalTee1 from '../images/shop/Natural-Tee-1.gif'
import naturalTee2 from '../images/shop/Natural-Tee-2.gif'

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/shop.css'



const CatalogPage = () => {
    debugger
    return (
        <>
            <div className="background-image-container shop">
                <img className="shop-background-image" src={backgroundImage} alt="Background Image" />
            </div>
            <div className='content'>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={blackHoodie1}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={blackHoodie2}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={blackHoodie3}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={blackTee}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={celeryHoodie}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={fondantHoodie}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={naturalTee1}></img>
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-image-container">
                        <img className="product-image" src={naturalTee2}></img>
                    </div>
                </div>
            </div>
        </>



    );
}

export default CatalogPage


// query MyQuery {
//   allContentfulEcommCountry(filter: {name: {eq: "US"}}) {
//     edges {
//       node {
//         id
//         name
//         catalog {
//           id
//           name
//           categories {
//             id
//             products {
//               id
//               color
//               name
//               slug
//               image {
//                 file {
//                   fileName
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
