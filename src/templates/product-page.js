import React, { useEffect, useRef, useState } from 'react'
import { Link, graphql } from 'gatsby';
import * as CLayer from 'commercelayer-react'
import { useShoppingBag } from "../hooks/useShoppingBag";
import ShopLayout from '../components/shop-layout';
import backgroundImage from '../images/shop/shop-background.jpg'
// import useShoppingBag from '../hooks'
// import SEO from '../components/seo'

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/shop.css'

export default (props) => {

    const product = props.data.contentfulEcommProduct;
    const name = product.name;
    const imageUrl = product.image[0].file.url;
    const variants = props.data.contentfulEcommProduct.variants.map(v => {
        // debugger
        return {
            code: v.code,
            name: `${props.data.contentfulEcommProduct.name} (${v.size.name})`,
            label: v.size.name
        }
    })


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
                    <CLayer.Price skuCode={product.variants[0].code} />

                    <div className="select is-fullwidth variant-select-wrap">
                        <CLayer.VariantSelect
                            className="variant-select"
                            PriceContainerId="price"
                            AvailabilityMessageContainerId="availability-message"
                            AddToBagId="add-to-bag"
                            promptText="Select a size"
                            skus={variants}
                        />
                    </div>

                    <CLayer.AddToBag
                        className={`add-to-bag button is-success is-fullwidth`}
                        id="add-to-bag"
                        AvailabilityMessageContainerId="availability-message"
                        text="Add to Bag"
                        onClick={handleOnClick}
                    />


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
                    />
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