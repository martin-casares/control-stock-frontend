import React from 'react';
import { MdMenu } from 'react-icons/md';

export const NavbarDash = ({ Toggle }) => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-transparent px-3 ">
			<MdMenu className="navbar-brand justify-content-left fs-1" onClick={Toggle} />

			<button
				className="navbar-toggler d-lg-none"
				type="button"
				data-bs-toggle="collapse"
				data-bs-aria-expanded="false"
				aria-label="Toggle navigation"
			></button>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
					<li className="nav-item dropdown">
						<a
							href=""
							className="nav-link dropdown-toggle text-white"
							id="dropdownId"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							admin
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdownId">
							<a href="" className="dropdown-item">
								Perfil
							</a>
							<a href="" className="dropdown-item">
								Inicio
							</a>
							<a href="" className="dropdown-item">
								Logout
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
