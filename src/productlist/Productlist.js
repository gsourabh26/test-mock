import React from 'react';

import "./productlist.css";

const productlist = props => {
	const products = props.products.map(product => {
		return (
			<div className="product-container">
				<img className="product-image" src={product.image} alt="product-image" />
				<div className="product-brand">{product.brand}</div>
				<div className="product-name">{product.name}</div>
				<div className="product-price-info">
					<span className="price">
						Rs. {product.discount ? (product.price * product.discount / 100 ): product.price}
					</span>
					{
						product.discount ?
							<React.Fragment>
								<span className="old-price">Rs. {product.price}</span>
								<span className="discount">({product.discount}% OFF)</span>
							</React.Fragment>
						: null
					}
				</div>
				{
					product.quantity < 10 ? 
						<div className="few-left">Only Few Left!</div>
					: null
				}	
			</div>
		)
	})
	return (
		<div className="main-content-container">
			<div className="product-list-container">
			{products}
			</div>
		</div>
	)
}

export default productlist;