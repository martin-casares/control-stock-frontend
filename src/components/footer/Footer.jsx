import { Link } from 'react-router-dom';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import './footer.css';

export const Footer = () => {
	return (
		<footer className="container mt-5 ">
			<hr className="mb-5" />
			<div className="w-100 text-center my-5 ">
				<h3 className="fw-bold">Seguinos en:</h3>
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

			<div className="footer-sections d-flex justify-content-center align-items-center">
				<div className=" w-100 my-2 text-center">
					<h3 className="fw-bold">Sobre Nosotros</h3>
					<Link to="about" className="text-decoration-none footer-about">
						¿Quiénes Somos?
					</Link>
					<p className="">Preguntas Frecuentes</p>
				</div>

				<div className="w-100 my-2 text-center">
					<h3 className="fw-bold">Legal</h3>
					<p className="">Términos y condiciones</p>
					<p className="">Política de Privacidad</p>
				</div>
				<div className="w-100 my-2 text-center">
					<h3 className="fw-bold">Contacto</h3>
					<p className="">Escribinos a</p>
					<p>martin@email.com</p>
				</div>
			</div>
			<div className="text-center my-5">
				<p className="">&copy; 2024 Martín</p>
				<p className="">Casi todos los derechos reservados</p>
			</div>
		</footer>
	);
};
