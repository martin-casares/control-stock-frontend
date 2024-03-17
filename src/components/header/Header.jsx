import React from 'react';

import './header.css';

export const Header = () => {
	return (
		<>
			<div className="header-container text-center py-3 mx-1">
				<h2 className="header-title text-success-emphasis">Find your product.</h2>
				<br />
				<div className="w-50 " style={{ margin: 'auto' }}>
					{/* <p className="text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit possimus
						cumque assumenda iusto natus ad earum eaque veniam mollitia? Architecto
						exercitationem, ut repudiandae deleniti blanditiis ab quos iusto corporis
						libero inventore velit eaque molestias saepe corrupti qui, explicabo
						doloremque quis! Delectus similique totam omnis incidunt debitis facilis,
						sapiente modi?
					</p> */}
				</div>
			</div>
		</>
	);
};
