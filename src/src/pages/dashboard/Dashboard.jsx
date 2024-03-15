import React, { useState } from 'react';

import { Sidebar } from '../../components/sidebar/Sidebar';
import { Panel } from '../../components/panel/Panel';

export const Dashboard = () => {
	const [toggle, setToggle] = useState(false);

	const Toggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className="container-fluid bg-secondary min-vh-100">
			<div className="row">
				{toggle && (
					<div className="col-3 bg-white vh-100">
						<Sidebar />
					</div>
				)}
				<div className="col">
					<Panel Toggle={Toggle} />
				</div>
			</div>
		</div>
	);
};
