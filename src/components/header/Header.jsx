import React from 'react';

export const Header = () => {
	return (
		<>
			<div className="text-center py-3" style={{ width: '100%' }}>
				<h2
					style={{
						textTransform: 'capitalize',
						fontSize: '60px',
						fontWeight: 'bold',
						margin: '30px',
					}}
				>
					Find your product.
				</h2>
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
