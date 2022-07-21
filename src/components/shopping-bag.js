

import React from 'react'
import * as CLayer from 'commercelayer-react'
// import { ShoppingBagProps } from '../types/index'
// import locale from '../locale/locale.json'

const ShoppingBag = ({open, close, ...props}) => {
    // const open = props.open;
    // const close = props.close;
    const customHandleClick = (e) => {
        debugger
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
                        <CLayer.Checkout onClick={customHandleClick} className={'button is-fullwidth is-success'} />
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