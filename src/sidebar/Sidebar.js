import React from "react";

import "./sidebar.css";


const sidebar = props => {
	const filtersCheckbox = props.checkBoxFilters.map(key => {
		return (
			<div className="sidebar-filter-container">
				<div className="sidebar-filter-header">
					<div className="sidebar-filter-title">{key}</div>
					{
						props[key].length > 7 ?
							<div className="sidebar-filter-search-icon"></div>
						: null
					}
				</div>
				<div className="sidebar-filter-options">
					{
						props[key].slice(0,7).map(option => {
							return (
								<div className="sidebar-filter-option">
									<input type="checkbox" id={option.name} key={option.name} className="filter-option-checkbox" />
									{
										option.code ? 
											<div className="sidebar-filter-code" style={{backgroundColor: option.code}}></div>
										: null
									}
									<div className="sidebar-filter-label">{option.name}</div>
									<div className="sidebar-filter-quantity">({option.total})</div>
								</div>
							)
						})
					}
					{
						props[key].length > 7 ?
							<div className="sidebar-filter-more-option"> + {props[key].length - 7 } more</div>
						: null
					}
				</div>
			</div>
		)
	})
	const filtersRadio = props.radioFilters.map(key => {
		return (
			<div className="sidebar-filter-container">
				<div className="sidebar-filter-header">
					<div className="sidebar-filter-title">{key}</div>
				</div>
				<div className="sidebar-filter-options">
					{
						props[key].map(option => {
							return (
								<div className="sidebar-filter-option">
									<input type="radio" id={option} name="discount" key={option} className="filter-option-checkbox" />
									<div className="sidebar-filter-label">{option}</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	})
	return (
		<div className="sidebar-container">
			{filtersCheckbox}
			{filtersRadio}
		</div>
	);
}

export default sidebar;
