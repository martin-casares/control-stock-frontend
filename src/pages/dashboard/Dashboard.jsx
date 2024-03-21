import React, { useState } from 'react';

import { Sidebar } from '../../components/sidebar/Sidebar';
import { PanelDash } from '../../components/panelDash/PanelDash';

export const Dashboard = () => {
	const [toggle, setToggle] = useState(true);

	const Toggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className="container-fluid bg-dark vh-100">
			<div className="row">
				{/* 	{toggle && (
					<div className="col-3 bg-dark">
						<Sidebar />
					</div>
				)} */}
				<div className="col">
					<PanelDash Toggle={Toggle} />
				</div>
			</div>
		</div>
	);
};
