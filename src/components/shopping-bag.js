

import React from 'react'
// import * as CLayer from 'commercelayer-react'
// import { ShoppingBagProps } from '../types/index'
// import locale from '../locale/locale.json'

const ShoppingBag = ({open, close, ...props}) => {
    // const open = props.open;
    // const close = props.close;



    return (
        <section className="section">
            <div className="container">
               
                {/* Shopping bag */}
                <h2 className="title">Shopping bag</h2>
                <p className="subtitle">
                    Your shopping bag contains{" "}
                    <span className="clayer-shopping-bag-items-count">0</span> items (
                    <span className="clayer-shopping-bag-total" />)
                    <a href="#" className="clayer-shopping-bag-toggle">
                        toggle
                    </a>
                </p>
                <div id="clayer-shopping-bag-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th colSpan={2}>SKU</th>
                                <th>Unit price</th>
                                <th>Q.ty</th>
                                <th>Total</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody id="clayer-shopping-bag-items-container"></tbody>
                        <template id="clayer-shopping-bag-item-template" />
                    </table>
                    <table className="table is-fullwidth">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="clayer-shopping-bag-subtotal" />
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="clayer-shopping-bag-shipping" />
                            </tr>
                            <tr>
                                <td>Payment</td>
                                <td className="clayer-shopping-bag-payment" />
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td className="clayer-shopping-bag-discount" />
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td className="clayer-shopping-bag-taxes" />
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="clayer-shopping-bag-total" />
                            </tr>
                        </tbody>
                    </table>
                    {/* Checkout */}
                    <a href="#" className="button is-success clayer-shopping-bag-checkout">
                        Proceed to checkout
                    </a>
                </div>
            </div>
        </section>

    )
}

// ShoppingBag.defaultProps = {
//     open: false
// }

export default ShoppingBag