import React from 'react';
import "./toolbar.css";

const toolbar = props => {
	return (
		<div className="toolbar-container">
			<div className="logo-container">
			</div>
			<div className="navigation-container">
				<ul className="navigation-list">
					<li className="navigation-list-item">men</li>
					<li className="navigation-list-item">women</li>
					<li className="navigation-list-item">kids</li>
					<li className="navigation-list-item">home & living</li>
					<li className="navigation-list-item">discover</li>
				</ul>
			</div>
			<div className="searchbar-container">
				<span className="searchbar-icon"> </span>
				<input type="text" className="searchbar" placeholder="Search for products, brands and more" />
			</div>
			<div className="nav-actions-container">
				<div className="nav-action-container">
					<div className="nav-action profile">
						<span className="icon"></span>
						Profile
					</div>
					<div className="nav-action wishlist">
						<span className="icon"></span>
						Wishlist
					</div>
					<div className="nav-action bag">
						<span className="icon"></span>
						Bag
					</div>
				</div>
			</div>
		</div>	
	);
}

export default toolbar;