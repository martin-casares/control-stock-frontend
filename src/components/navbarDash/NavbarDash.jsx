import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const handleLogout = () => {
	localStorage.removeItem('user');
	navigate('/login', { replace: true });
};

export const NavbarDash = ({ Toggle }) => {
	return (
		<nav className="navbar navbar-expand px-3 ">
			<MdMenu className="navbar-brand justify-content-left fs-1" onClick={Toggle} />

			<button
				className="navbar-toggler d-lg-none"
				type="button"
				data-bs-toggle="collapse"
				data-bs-aria-expanded="false"
				aria-label="Toggle navigation"
			></button>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav me-auto mt-2 mt-lg-0">
					<li className="nav-item dropdown">
						<a
							href=""
							className="nav-link dropdown-toggle text-white"
							id="dropdownId"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Admin
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdownId">
							<a href="" className="dropdown-item">
								Perfil
							</a>
							<a href="" className="dropdown-item">
								Inicio
							</a>
							<Link to="/" className="dropdown-item" onClick={handleLogout}>
								Logout
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
