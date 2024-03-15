import React from 'react';

import { FaUsers } from 'react-icons/fa';

export const CardDash = ({ title, total }) => {
	return (
		<div className="container-fluid">
			<div className="row g-2 my-5">
				<div className="col ">
					<div className=" bg-white shadow-sm">
						<div className="p-2">
							<p className="fs-5">{title}</p>
						</div>
						<div style={{ display: 'flex', margin: '10px' }}>
							<h3 className="fs-2">{total}</h3>
							<FaUsers size={50} className=" " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
