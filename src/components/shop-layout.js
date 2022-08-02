

import React, { Children } from 'react'
import { Link, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import * as CLayer from 'commercelayer-react'
// import Header from './Header'
// import Footer from './Footer'
// import 'bulma'
// import '../stylesheets/main.css'
import ShoppingBag from './shopping-bag'
import useJsLibrary from '../hooks/useJsLibrary'


import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/shop.css'


const ShopLayout = (props) => {
    
    const shipping = props.pageContext.shipping;
    const countryCode = props.pageContext.shipping;
    const language = props.pageContext.language;
    let marketId = "10564"
    const sectionOpacity = props.shoppingBagStatus ? 'open' : ''
    switch (countryCode) {
        case 'US':
            marketId = "10564";
            break;
        default:
            marketId = "10564";
    }
    return (
        <div className={`section ${sectionOpacity}`}>
            {props.children}
            <ShoppingBag
                lang={language}
                open={props.shoppingBagStatus}
                close={props.setShoppingBagStatus}
            />
            <CLayer.Config
                baseUrl='https://recess-studios.commercelayer.io'
                clientId='ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0'
                marketId={marketId}
                countryCode={shipping ? shipping.toUpperCase() : 'US'}
                languageCode={
                    language ? language.toLowerCase().replace('-us', '') : 'en'
                }
                // cartUrl={'http://checkout.localhost:8000'}
                // returnUrl={<Link to="/cart" />}
                // privacyUrl={<Link to="/privacy" />}
                // termsUrl={<Link to="/terms" />}
            />
            {/* Config */}
            {/* <div
                id="clayer-config"
                data-base-url="https://recess-studios.commercelayer.io"
                data-cache="true"
                data-client-id="ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0"
                data-market-id={marketId}
                data-country-code={countryCode}
                data-language-code="en"
                data-cart-url={<Link to="/cart" />}
                data-return-url={<Link to="/cart" />}
                // data-privacy-url={<Link to="/privacy" />}
                // data-terms-url={<Link to="/terms" />}
                data-dev-settings-debug="true"
                data-dev-settings-console="true"
                data-dev-settings-trace="true"
            ></div>  */}
            {/* {/* Commerce Layer JS Dropin Library */}

            {/* {useJsLibrary('https://cdn.jsdelivr.net/npm/@commercelayer/js-dropin@1.5.14/lib/index.js')} */}
        </div>

    )
}

// ShopLayout.propTypes = {
//     children: PropTypes.node.isRequired
// }


export default ShopLayout;