// import React, { useEffect, useRef, useState } from 'react'
// // import { ProductsProps } from '../types/index'
// // import * as CLayer from 'commercelayer-react'
// import { Link } from 'gatsby'
// import Product from './product'
// import { useShoppingBag } from '../hooks/useShoppingBag'
// // import Cart from './cart'
// // import useShoppingBag from '../hooks'
// // import { usePriceLoading } from '../hooks/index'
// // import loader from '../images/three-dots-loader.svg'
// // import { SimpleImg } from 'react-simple-img'

// const Products = (props) => {
    
//     const { data, shop, lang, categorySlug } = props
//     const env = process.env.NODE_ENV;
//     const productsData = props.data;
//     const [status, setStatus] = useShoppingBag()
//     const delayTimer = useRef(null)
//     // useEffect(() => {
//     //     return window.clearInterval(delayTimer.current)
//     // })
//     const handleOnClick = e => {
//         console.log(e.target.dataset)
//         if (e.target.hasAttribute('disabled')) {
//             return e.preventDefault()
//         }
//         delayTimer.current = window.setInterval(() => {
//             setStatus()
//         }, 1000)
//     }
//     let products;
    
//     products = productsData.map((product) => {
//         let productSlug = "";
//         let itemLink = "";
             
//         productSlug = product.name.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/gm, '-').replace(/--/, "-")
//         itemLink = productSlug;
//         // itemLink = [categorySlug.toLowerCase(), productSlug ].join("/");
//         console.log(itemLink)
//         return (
//             <Product
//                 contentful_id={product.contentful_id}
//                 imageUrl={product.image[0].file.url}
//                 name={product.name}
//                 color={product.color}
//                 variants={product.variants}
//                 onClick={handleOnClick}
//                 itemLink={itemLink}
//             />

//         )

//     })


//     // slides = slideshowMedia.map((imageData, i) => {
//     // const loading = usePriceLoading('clayer-prices-ready')
//     return (
//         <div className='content'>
//             {products}
//             {/* <Cart /> */}
//         </div>


//     )
// }

// export default Products