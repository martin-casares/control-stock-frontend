import React from 'react';
import './sidebar.css';

import { FaHome, FaUsers, FaRProject } from 'react-icons/fa';
import {
	MdDashboard,
	MdOutlineProductionQuantityLimits,
	MdLogout,
} from 'react-icons/md';

export const Sidebar = () => {
	return (
		<div className="bg-primary d-flex flex-column sidebar">
			<div className="my-4 mx-2">
				{/* <FaRProject className="me-2 fs-4" /> */}
				<span className="brand-name fs-5">TP Final Rolling</span>
			</div>
			{/* 	<hr className="text-dark" /> */}
			<div className="list-group  flex-grow-1">
				<a href="" className="list-group-item py-2">
					<MdDashboard className="fs-5 ms-3" />
					<span>Dashboard</span>
				</a>
				<a href="" className="list-group-item  py-2">
					<FaHome className="fs-5 ms-3" />
					<span>Inicio</span>
				</a>
				<a href="" className="list-group-item  py-2">
					<FaUsers className="fs-5 ms-3" />
					<span>Usuarios</span>
				</a>
				<a href="" className="list-group-item  py-2">
					<MdOutlineProductionQuantityLimits className="fs-5 ms-3" />
					<span>Productos</span>
				</a>
			</div>
			<div className="list-group list-group-flush mt-auto">
				<a href="" className="list-group-item  py-2">
					<MdLogout className="fs-5 ms-3" />
					<span>Logout</span>
				</a>
			</div>
		</div>
	);
};
