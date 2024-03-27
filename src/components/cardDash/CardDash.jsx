import React from 'react';
import './cardDash.css';
import { FaUsers, FaShoppingCart, FaListAlt } from 'react-icons/fa';

export const CardDash = ({ title, total, type, isSelected, onClick }) => {
	let icon;
	switch (type) {
		case 'users':
			icon = <FaUsers size={50} />;
			break;
		case 'products':
			icon = <FaShoppingCart size={50} />;
			break;
		case 'categories':
			icon = <FaListAlt size={50} />;
			break;
		default:
			icon = <FaUsers size={50} />;
			break;
	}
	return (
		<div
			className={`container-fluid ${isSelected ? 'selected' : ''}`}
			onClick={onClick}
		>
			<div className="row g-2 my-5">
				<div className="col ">
					<div className="shadow-sm border rounded bg-primary">
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
							{icon}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
