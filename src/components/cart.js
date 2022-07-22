import React from 'react'

const Cart = (props) => {
    return (
        <>
            {/* <!-- Shopping bag --> */}
            <h2 class="title">
                Shopping bag
            </h2>
            <p class="subtitle">
                Your shopping bag contains <span class="clayer-shopping-bag-items-count">0</span> items (<span class="clayer-shopping-bag-total"></span>)
                <a href="#" class="clayer-shopping-bag-toggle">toggle</a>
            </p>

            <div id="clayer-shopping-bag-container">
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th colspan="2">SKU</th>
                            <th>Reference</th>
                            <th>Unit price</th>
                            <th>Q.ty</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="clayer-shopping-bag-items-container">
                    </tbody>
                    <template id="clayer-shopping-bag-item-template">
                        <tr>
                            <td>
                                <img class="clayer-shopping-bag-item-image"></img>
                            </td>
                            <td class="clayer-shopping-bag-item-name"></td>
                            <td class="clayer-shopping-bag-item-reference"></td>
                            <td class="clayer-shopping-bag-item-unit-amount"></td>
                            <td class="clayer-shopping-bag-item-qty-container" data-max-qty="100">
                                <span class="clayer-shopping-bag-item-availability-message-container"></span>
                            </td>
                            <td class="clayer-shopping-bag-item-total-amount"></td>
                            <td>
                                <a href="#" class="clayer-shopping-bag-item-remove">remove</a>
                            </td>
                        </tr>
                    </template>
                </table>

                <table class="table is-fullwidth">
                    <tr>
                        <td>Subtotal</td>
                        <td class="clayer-shopping-bag-subtotal"></td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td class="clayer-shopping-bag-shipping"></td>
                    </tr>
                    <tr>
                        <td>Payment</td>
                        <td class="clayer-shopping-bag-payment"></td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td class="clayer-shopping-bag-discount"></td>
                    </tr>
                    <tr>
                        <td>Taxes</td>
                        <td class="clayer-shopping-bag-taxes"></td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td class="clayer-shopping-bag-total"></td>
                    </tr>
                </table>

                {/* <!-- Checkout --> */}

                <a href="#" class="button is-success clayer-shopping-bag-checkout">Proceed to checkout</a>
            </div>
        </>
    )
}

export default Cart;