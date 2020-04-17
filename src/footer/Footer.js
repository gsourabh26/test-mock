import React from 'react';

import "./footer.css";

const footer = props => {
	const searches = props.searches.map(search => {
		return (
			<div className="search-keyword">{search}</div>
		)
	})
	return (
		<div className="footer-container">
			<div className="footer-heading">
				<span className="label">Popular Searches</span>
			</div>
			<div className="footer-searches-container">
				{searches}
			</div>
			<div className="footer-copyright-container">
				<div className="contact-us">
					In case of any concern, <a href="#">Contact Us</a>
				</div>
				<div className="copy-right">
					&copy; 2020 www.myntra.com. All rights reserved.
				</div>
			</div>
		</div>
	)
}

export default footer;