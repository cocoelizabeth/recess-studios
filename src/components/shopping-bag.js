import React, {useRef, useState} from 'react'
import * as CLayer from 'commercelayer-react'
import { navigate } from 'gatsby';
// import { ShoppingBagProps } from '../types/index'
// import locale from '../locale/locale.json'

const ShoppingBag = ({ open, close, ...props }) => {
    // const open = props.open;
    // const close = props.close;
    // debugger
    // const customOnClick = () => {
    //     debugger
    // }
    const [checkoutLink, setCheckoutLink] = useState("#");
    
    function handleCheckout() {
        let checkoutURL = "https://recess-studios.checkout.commercelayer.app/";
        let orderId = "";
        let accessToken = "";
        console.log(checkoutLink)
        let cookies = document.cookie.split("=");
        for (let i=0; i<cookies.length; i++) {
            if (cookies[i].includes("order_token_ca9Lqe-VhQpED4It7n2OO7b9MSFHTFlPyKMJCQ23XZ0_10564_US")) {
                orderId = cookies[i+1].split(";")[0]
            } else if (cookies[i].includes("access_token")) {
                accessToken = cookies[i+1]
            }
        }
        checkoutURL += orderId + "?accessToken=" + accessToken;
        debugger
        navigate(checkoutURL)
        
    }
    


    return (
        <div id='shopping-bag' className={open ? 'open' : ''}>
            <div className='shopping-bag-content'>
                <div className='columns'>
                    <div className='column'>
                        <h4 className='has-text-weight-bold'>
                            {`Your Shopping bag`}
                        </h4>
                    </div>
                    <div className='column'>
                        <CLayer.ShoppingBagTotal />
                    </div>
                </div>
                <div className='shopping-bag-unavailable-message has-text-danger'>
                    {`Out of Stock`}
                </div>
                <CLayer.ShoppingBagItems
                    ItemsContainerTag='table'
                    itemTemplate={
                        <table id='shopping-bag-table' className='table is-fullwidth'>
                            <tr>
                                <td className='shopping-bag-col shopping-bag-col-image'>
                                    <CLayer.ShoppingBagItemImage />
                                </td>
                                <td className='shopping-bag-col shopping-bag-col-name'>
                                    <CLayer.ShoppingBagItemName />
                                </td>
                                <td className='shopping-bag-col shopping-bag-col-qty'>
                                    <CLayer.ShoppingBagItemQtyContainer />
                                </td>
                                <td className='shopping-bag-col shopping-bag-col-total'>
                                    <CLayer.ShoppingBagItemUnitAmount />
                                </td>
                                <td className='shopping-bag-col shopping-bag-col-remove'>
                                    <CLayer.ShoppingBagItemRemove />
                                </td>
                            </tr>
                        </table>
                    }
                />
                <div className='columns'>
                    <div className='column'>
                        <a
                            className='button is-fullwidth'
                            id='shopping-bag-close'
                            onClick={close}
                        >
                            {'Continue Shopping'}
                        </a>
                    </div>
                    <div className='column'>
                        {/* <a href="#" className="clayer-shopping-bag-checkout">THIS CHECKOUT WORKS</a> */}
                        <a 
                        // href={handleCheckout}
                        onClick= {handleCheckout}
                        className="button is-fullwidth is-success checkout">Proceed to checkout</a>
                  
                        {/* <CLayer.Checkout className={'button is-fullwidth is-success'} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ShoppingBag.defaultProps = {
//     open: false
// }

export default ShoppingBag