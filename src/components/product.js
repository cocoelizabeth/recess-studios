// import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'gatsby';
// import * as CLayer from 'commercelayer-react'
// import { useShoppingBag } from "../hooks/useShoppingBag";

// const handleClick = event => {
    
// }

// const Product = (props) => {
    

//     const [status, setStatus] = useShoppingBag()
//     useEffect(() => {
        
//     })
//     const delayTimer = useRef(null)
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
//     const variants = props.variants.map(v => {
        
//         return {
//             code: v.code,
//             name: `${v.name.split("-")[0].trim()} (${v.size.name})`,
//             label: v.size.name
//         }
//     })

//     return (
//         <div className="product-container">
//             {/* image */}
//             <div className="product-image-container">
//                 <img className="product-image" src={props.imageUrl}></img>
//             </div>

//             <div className="product-details-container">
//                 <div>{props.name}</div>
//                 <CLayer.Price skuCode={props.variants[0].code} />

//                 <div className="select is-fullwidth variant-select-wrap">
//                     <CLayer.VariantSelect
//                         className="variant-select"
//                         PriceContainerId="price"
//                         AvailabilityMessageContainerId="availability-message"
//                         AddToBagId="add-to-bag"
//                         promptText="Select a size"
//                         skus={variants}
//                     />
//                 </div>

//                 <a href={props.itemLink}>
                   
//                     VIEW
//                 </a>
//             </div>
        
//         </div>
        
            
      
//     )
// }

// export default Product

