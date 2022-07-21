import React from 'react'
import { Link, graphql } from 'gatsby'
import ShopLayout from '../components/shop-layout'
import backgroundImage from '../images/shop/shop-background.jpg'
// import Cart from '../components/cart'
import Products from '../components/products'
import { useShoppingBag } from '../hooks/useShoppingBag'

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/shop.css'




const CategoryPage = (props) => {
    
    const products = props.data.contentfulEcommCategory.products;
    const shop = props.pageContext.shipping.toLowerCase();
    const lang = props.pageContext.language;
    const uri = props.pageContext.slug;
    const categorySlug = props.pageContext.categorySlug;
    const categoryName = props.data.contentfulEcommCategory.name.trim();
    const [status, setStatus] = useShoppingBag()

    return (

        <ShopLayout
            {...props}
            shoppingBagStatus={status}
            setShoppingBagStatus={setStatus}
        >
            <div className="background-image-container">
                <img className="shop-background-image" src={backgroundImage} alt="Background Image" />
            </div>

            <Products
                shop={shop}
                lang={lang}
                data={products}
                categorySlug={categorySlug}
            />

        </ShopLayout>
        // <ShopLayout>

        // <ShopLayout 
        //     {...props}
        //     // shoppingBagStatus={status}
        //     // setShoppingBagStatus={setStatus}
        // >


        //     <Cart />

        //  </ShopLayout>



    );
}

export default CategoryPage

export const query = graphql`
  query EcommProducts($categoryId: String!) {
    contentfulEcommCategory(
        contentful_id: {eq: $categoryId}
    ) {
        name
        products {
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
        node_locale
      }
    }
`