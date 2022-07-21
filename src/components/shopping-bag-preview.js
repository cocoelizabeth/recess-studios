import React from 'react'


const ShoppingBagPreview = ({ onClick }) => {
    return (
        <a className="navbar-item" id="shopping-bag-toggle" onClick={onClick}>
            <span className="icon">
                {/* <FontAwesomeIcon icon={faShoppingBag} /> */}
                BAG (
            </span>
            <span
                className="clayer-shopping-bag-items-count tag is-warning is-rounded"
                id="shopping-bag-preview-count"
            >
                0
            </span>
            <span>)</span>
        </a>
    )
}

export default ShoppingBagPreview