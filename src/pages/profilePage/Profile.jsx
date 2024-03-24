import React from 'react';
import { Link } from 'react-router-dom';

import './profile.css';

import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export const Profile = () => {
	const user = JSON.parse(localStorage.getItem('user')) || null;

	return (
		<div className=" overflow-hidden">
			<div className="px-4 pt-0 pb-4 cover ">
				<div className="media  profile-head">
					<div className="profile mx-3 d-flex justify-content-around">
						<img
							src={user.avatar}
							alt="..."
							width="130"
							className="rounded mb-4 img-rounded"
						/>
						<div className="profile-name media-body mb-1 text-white">
							<h4 className="mt-5 fs-1 ">
								{user.firstName} {user.lastName}
							</h4>

							<Link
								to="/page404"
								className="profile-btn btn btn-outline-primary mt-3 me-5  "
							>
								Editar perfil
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="bg-primary p-4 d-flex justify-content-end text-center">
				<ul className="list-inline mb-0">
					<li className="list-inline-item">
						<h5 className="font-weight-bold mb-0 d-block">215</h5>
						<small className="text-muted">
							<i className="fas fa-image mr-1"></i>Photos
						</small>
					</li>
					<li className="list-inline-item">
						<h5 className="font-weight-bold mb-0 d-block">745</h5>
						<small className="text-muted">
							<i className="fas fa-user mr-1"></i>Followers
						</small>
					</li>
					<li className="list-inline-item">
						<h5 className="font-weight-bold mb-0 d-block">340</h5>
						<small className="text-muted">
							<i className="fas fa-user mr-1"></i>Following
						</small>
					</li>
				</ul>
			</div> */}
			<div className="px-1 py-5 container ">
				<h5 className="mt-5 mx-5 fs-2">Acerca de {user.firstName}</h5>
				<div className="p-4 rounded shadow-sm text-center mt-5 bg-dark rounded">
					<p className="fs-4">
						<strong className="text-danger fw-bold ">Correo:</strong> {user.email}
					</p>
					<p className="fs-4 ">
						<strong className="text-danger fw-bold ">Rol:</strong> {user.rol}
					</p>
					{/* <p className=""></p> */}
				</div>
			</div>
			<div className="container profile-redes bg-dark pt-3">
				<h3 className="fw-bold text-center">Redes</h3>
				<div className="d-flex justify-content-center bg-dark">
					<div className="my-4 ">
						<Link
							to="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook size={40} />
						</Link>
						<Link
							to="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="me-3"
						>
							<FaInstagramSquare size={40} />
						</Link>
						<Link
							to="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="me-3"
						>
							<FaSquareXTwitter size={40} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
