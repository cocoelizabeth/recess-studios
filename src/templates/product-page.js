import React, { useEffect, useRef, useState } from 'react'
import { Link, graphql } from 'gatsby';
// import * as CLayer from 'commercelayer-react'
import { useShoppingBag } from "../hooks/useShoppingBag";
import ShopLayout from '../components/shop-layout';
// import useShoppingBag from '../hooks'
// import SEO from '../components/seo'

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/shop.css'

function createVariants(image) {
    return function(v) {
        return {
            code: v.code,
            name: v.name,
            label: v.size.name,
            imageUrl: image
        }
    }
}

export default (props) => {
    
    const product = props.data.contentfulEcommProduct;
    const name = product.name;
    const imageUrl = product.image[0].file.url;
    // const variants = props.data.contentfulEcommProduct.variants.map(v => {
    //     return {
    //         code: v.code,
    //         name: v.name,
    //         // name: `${props.data.contentfulEcommProduct.name} (${v.size.name})`,
    //         label: v.size.name
    //     }
    // })


    const variants = props.data.contentfulEcommProduct.variants.map(createVariants(imageUrl))
    
    const variantOptions = variants.map(v => {
        return (
                <option 
                    className="clayer-variant" 
                    data-sku-code={v.code}
                    data-sku-name={v.name} 
                    data-sku-image-url={v.imageUrl}
                    value=''
                >
                    {v.label}
                </option>
        )
    })



    // console.log(variants)
    // const handleOnClick = e => {
    //     if (e.target.hasAttribute('disabled')) {
    //         return e.preventDefault()
    //     }
    //     delayTimer.current = window.setInterval(() => {
    //         setStatus()
    //     }, 1000)

        
    // }


    const [status, setStatus] = useShoppingBag()
    const delayTimer = useRef(null)

    useEffect(() => {
        return window.clearInterval(delayTimer.current)
    })
    const handleOnClick = e => {
        if (e.target.hasAttribute('disabled')) {
            return e.preventDefault()
        }
        delayTimer.current = window.setInterval(() => {
            setStatus()
        }, 1000)
    }
    return (
        <ShopLayout 
            {...props}
            shoppingBagStatus={status}
            setShoppingBagStatus={setStatus}>
            <div className="product-container">
                {/* image */}
                <div className="product-image-container">
                    <img className="product-image" src={imageUrl}></img>
                </div>

                <div className="product-details-container">
                    <div className="title">{name}</div>
                    {/* <!-- Price tag --> */}
                    {/* <CLayer.Price skuCode={product.variants[0].code} /> */}
                    <div
                        className="clayer-price"
                        id="price"
                        data-sku-code={product.variants[0].code}
                    >
                        <span className="amount"></span>
                        <span className="compare-at-amount"></span>
                    </div>

                    {/* <!-- Variant Select --> */}
                    {/* <div className="select is-fullwidth variant-select-wrap">
                        <CLayer.VariantSelect
                            className="variant-select"
                            PriceContainerId="price"
                            AvailabilityMessageContainerId="availability-message"
                            AddToBagId="add-to-bag"
                            promptText="Select a size"
                            skus={variants}
                        />
                    </div> */}

                    <div className="select"> 
                        <select 
                            className="clayer-variant-select" 
                            name="variant" 
                            data-availability-message-container-id="availability-message" 
                            data-add-to-bag-id="add-to-bag" 
                            data-add-to-bag-quantity-id="add-to-bag-quantity"
                            
                        >
                            <option value="" disabled defaultValue>Select a size*</option>
                            {variantOptions}
                        </select>
                            
                    </div>

                    {/* <input id="add-to-bag-quantity" type="number" value="1" min="1" max="25" class="input clayer-add-to-bag-quantity"></input> */}

                    {/* <!-- Add to bag --> */}
                    
                    {/*  <CLayer.AddToBag
                        className={`add-to-bag button is-success is-fullwidth`}
                        id="add-to-bag"
                        AvailabilityMessageContainerId="availability-message"
                        text="Add to Bag"
                        onClick={handleOnClick}
                    /> */}

                    <a href="#" className="button is-fullwidth clayer-add-to-bag" onClick={handleOnClick} id="add-to-bag"
                        data-availability-message-container-id="availability-message">Add to bag</a>



{/* 
                    <CLayer.AvailabilityMessageContainer id='availability-message' />
                    <CLayer.AvailabilityMessageAvailableTemplate
                        className='available-message has-text-success'
                        availableTemplate={
                            <p className='has-text-success'>
                                <span className='is-capitalized'>
                                    AVAILABLE
                                </span>
                                {' '}in{' '}
                                <CLayer.AvailabilityMessageMinDays className='available-message-min-days' />
                                -
                                <CLayer.AvailabilityMessageMaxDays className='available-message-max-days' />{' '}
                                {`days`}
                            </p>
                        }
                    />
                    <CLayer.AvailabilityMessageUnavailableTemplate
                        className='unavailable-message has-text-danger'
                        unavailableTemplate={<p>{`SOLD OUT`}</p>}
                    /> */}
                </div>


            </div>
        </ShopLayout>

    )
}

// export const query = graphql`
//   query EcommProducts($categoryId: String, $language: String) {
//     contentfulEcommCategory(
//       contentful_id: { eq: $categoryId }
//       node_locale: { eq: $language }
//     ) {
//       name
//       products {
//         contentful_id
//         name
//         image {
//           file {
//             url
//           }
//         }
//         // reference
//         variants {
//           code
//         }
//       }
//       node_locale
//       products_it {
//         contentful_id
//         name
//         image {
//           file {
//             url
//           }
//         }
//         reference
//         variants {
//           code
//         }
//       }
//     }
//   }
// `



export const query = graphql`
  query contentfulEcommProducts($productId: String!) {
    contentfulEcommProduct(
        contentful_id: {eq: $productId}
    ) {
        name
       
            contentful_id
            name
            color
            image {
                file {
                    url
                }
            }
            variants {
                code
                name
                size {
                    name
                }
            }
        
      }
    }
`