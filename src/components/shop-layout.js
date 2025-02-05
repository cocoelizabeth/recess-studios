// import React, { Children } from 'react'
// import { Link, graphql } from 'gatsby'
// // import * as CLayer from 'commercelayer-react'
// import ShoppingBag from './shopping-bag'
// import useJsLibrary from '../hooks/useJsLibrary'
// import Header from './header'
// import ShopHeader from './shop-header'

// import '../css/font.css'
// import '../css/reset.css'
// import '../css/styles.css'
// import '../css/work-menu.css'
// import '../css/shop.css'


// const ShopLayout = (props) => {
//     const shipping = props.pageContext.shipping;
//     const countryCode = props.pageContext.shipping;
//     const language = props.pageContext.language;
//     let marketId = "10564"
//     const sectionOpacity = props.shoppingBagStatus ? 'open' : ''
//     switch (countryCode) {
//         case 'US':
//             marketId = "10564";
//             break;
//         default:
//             marketId = "10564";
//     }

//     return (
//         <div className={`section ${sectionOpacity}`}>
//             <ShopHeader 
//                 leftText="SHOP"
//                 background="" 
//                 leftTextLink="/shop/all-products/" 

//             />

//            {/* <Header leftText="SHOP" background="" leftTextLink="/shop/all-products/" /> */}
//             {props.children}
//             <ShoppingBag
//                 lang={language}
//                 open={props.shoppingBagStatus}
//                 close={props.setShoppingBagStatus}
//             />

//             <CLayer.Config
//                 baseUrl='https://recess-studios.commercelayer.io'
//                 clientId='ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0'
//                 marketId={marketId}
//                 countryCode={shipping ? shipping.toUpperCase() : 'US'}
//                 languageCode={
//                     language ? language.toLowerCase().replace('-us', '') : 'en'
//                 }
//             />


        
//         </div>

//     )
// }


// export default ShopLayout;

// // import React, { Children } from 'react'
// // import { Link, graphql } from 'gatsby'
// // import ShoppingBag from './shopping-bag'
// // import Header from './header'
// // import ShopHeader from './shop-header'



// // import {CommerceLayer} from '@commercelayer/react-components'

// // import useAuthToken from '../hooks/useAuthToken'

// // import '../css/font.css'
// // import '../css/reset.css'
// // import '../css/styles.css'
// // import '../css/work-menu.css'
// // import '../css/shop.css'


// // const ShopLayout = (props) => {
// //     const shipping = props.pageContext.shipping;
// //     const countryCode = props.pageContext.shipping;
// //     const language = props.pageContext.language;
// //     let marketId = "10564"
// //     const sectionOpacity = props.shoppingBagStatus ? 'open' : ''
// //     switch (countryCode) {
// //         case 'US':
// //             marketId = "10564";
// //             break;
// //         default:
// //             marketId = "10564";
// //     }
// //           const { token } = useAuthToken();



  
// //   return token ? (
// //     <CommerceLayer
// //       accessToken={token}
// //       endpoint="https://recess-studios.commercelayer.io"
// //     >
// //       {/* <OrderContainer persistKey="demo-wine-product-card">
// //         <ItemContainer skuCode={sku}>{children}</ItemContainer>
// //       </OrderContainer> */}
// //     </CommerceLayer>
// //   ) : (
// //     <p>Loading...</p>
// //   );
// //             {/* <ShopHeader 
// //                 leftText="SHOP"
// //                 background="" 
// //                 leftTextLink="/shop/all-products/" 

// //             />

// //             {props.children}
// //             <ShoppingBag
// //                 lang={language}
// //                 open={props.shoppingBagStatus}
// //                 close={props.setShoppingBagStatus}
// //             />

// //             <CLayer.Config
// //                 baseUrl='https://recess-studios.commercelayer.io'
// //                 clientId='ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0'
// //                 marketId={marketId}
// //                 countryCode={shipping ? shipping.toUpperCase() : 'US'}
// //                 languageCode={
// //                     language ? language.toLowerCase().replace('-us', '') : 'en'
// //                 }
// //             /> */}



// // }


// // export default ShopLayout;