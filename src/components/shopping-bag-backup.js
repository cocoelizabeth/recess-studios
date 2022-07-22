

import React from 'react'
// import * as CLayer from 'commercelayer-react'
// import { ShoppingBagProps } from '../types/index'
// import locale from '../locale/locale.json'

const ShoppingBag = ({open, close, ...props}) => {
    // const open = props.open;
    // const close = props.close;

    const customHandleClick = (e) => {
       
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
                        {/* <CLayer.ShoppingBagTotal /> */}
                        <div className="clayer-shopping-bag-total"></div>
                    </div>
                </div>
                <div className='shopping-bag-unavailable-message has-text-danger'>
                    {`Out of Stock`}
                </div>
                {/* <CLayer.ShoppingBagItems
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
                /> */}
{/* 
                <div id="clayer-shopping-bag-container" className="open">
                    <table>
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                    </table>
                </div> */}

                <div id="clayer-shopping-bag-container" className="open">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">SKU</th>
                                <th>Reference</th>
                                <th>Unit price</th>
                                <th>Q.ty</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="clayer-shopping-bag-items-container">
                        </tbody>
                        {/* <template id="clayer-shopping-bag-item-template">
                            <tr>
                                <td>
                                    <img className="clayer-shopping-bag-item-image"></img>
                                </td>
                                <td className="clayer-shopping-bag-item-name"></td>
                                <td className="clayer-shopping-bag-item-reference"></td>
                                <td className="clayer-shopping-bag-item-unit-amount"></td>
                                <td className="clayer-shopping-bag-item-qty-container">

                                    <span className="clayer-shopping-bag-item-availability-message-container"></span>
                                </td>
                                <td className="clayer-shopping-bag-item-total-amount"></td>
                                <td>
                                    <a href="#" className="clayer-shopping-bag-item-remove">remove</a>
                                </td>
                            </tr>
                        </template> */}
                    </table>

                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="clayer-shopping-bag-subtotal"></td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="clayer-shopping-bag-shipping"></td>
                            </tr>
                            <tr>
                                <td>Payment</td>
                                <td className="clayer-shopping-bag-payment"></td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td className="clayer-shopping-bag-discount"></td>
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td className="clayer-shopping-bag-taxes"></td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="clayer-shopping-bag-total"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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
                        <a href="#" className="clayer-shopping-bag-checkout">THIS CHECKOUT WORKS</a>
                        {/* <CLayer.Checkout onClick={customHandleClick} className={'button is-fullwidth is-success'} /> */}
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