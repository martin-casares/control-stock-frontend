import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/404.png';
import './page404.css';

export const Page404 = () => {
	return (
		<div>
			<div className="content">
				<div className="content-img">
					<img src={img} alt="" />
					<p className="content-number">404</p>
				</div>
				<div className="content-description">
					<p className="content-error">Algo salio mal, pagina no encontrada.</p>
					<Link
						to="/"
						className="btn btn-secondary px-5 fw-bold fs-5 content-button"
					>
						Inicio
					</Link>
				</div>
			</div>
		</div>
	);
};
