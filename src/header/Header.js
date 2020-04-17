import React from 'react';
import "./header.css";


const header = props => {
	const filters = props.topFilters.slice(0, 5).map(tp => {
		return <div className="filter-item">{tp}</div>
	});
	if(props.topFilters.length > 5) {
		filters.push(<div className="more-links"> + {props.topFilters.length - 5} more</div>) 
	}

	const sortOptions = props.sortBy.map(sortOp => {
		return <div key={sortOp} value={sortOp} className="sort-option">{sortOp}</div>
	});

	return (
		<div className="header-container">
			<div className="header-bradcrum-container">
				<div className="header-bradcrum">
					<ul>
						<li>Home</li>
						<li>Clothing</li>
						<li>Men Clothing</li>
						<li>Tshirts</li>
						<li>Men Tshirts</li>
					</ul>
				</div>
				<div className="header-page-heading">
					<h4>Men Tshirts</h4> <span> - {props.totalItems} items</span>
				</div>
			</div>

			<div className="headers-filters-container">
				<div className="filters-heading">FILTERS</div>
				<div className="filters-values">
					{filters}
				</div>
				<div className="sorting-container">
					<div name="sort" className="sorting-select">
						{props.sortBy[0]}
					</div>
					<div name="sort" className="sorting-options">
						{sortOptions}
					</div>
				</div>
			</div>
		</div>
	);
}

export default header;