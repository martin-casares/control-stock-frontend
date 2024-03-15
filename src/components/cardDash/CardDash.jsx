import React from 'react';

import { FaUsers } from 'react-icons/fa';

export const CardDash = ({ title, total }) => {
	return (
		<div className="container-fluid">
			<div className="row g-2 my-5">
				<div className="col ">
					<div className="shadow-sm border rounded bg-dark">
						<div className="p-2">
							<p className="fs-3">{title}</p>
						</div>
						<div
							style={{
								display: 'flex',
								margin: '10px',
								justifyContent: 'space-between',
							}}
						>
							<h3 className="fs-1">{total}</h3>
							<FaUsers size={50} className=" " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
