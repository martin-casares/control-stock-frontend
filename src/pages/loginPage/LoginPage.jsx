import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './loginPage.css';
import api from '../../api/api.js';
import { Footer } from '../../components/footer/Footer';

export const LoginPage = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const postLogin = async (email, password) => {
		try {
			const resp = await api.post('/api/login', { email, password });

			localStorage.setItem('token', resp.data.token);
			const user = {
				id: resp.data.id,
				firstName: resp.data.firstName,
				lastName: resp.data.lastName,
				email: resp.data.email,
				rol: resp.data.rol,
				avatar: resp.data.avatar,
				createdAt: resp.data.createdAt,
				updatedAt: resp.data.updatedAt,
			};

			localStorage.setItem('user', JSON.stringify(user));

			navigate('/');
			console.log('Inicio de sesión exitoso:', resp.data.message);
		} catch (error) {
			console.log(error.response.data.message);
			setError(error.response.data.message);
			setTimeout(() => {
				setError('');
			}, 2000);
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();

		if (!email || !password) {
			setError('Por favor, complete todos los campos.');
			setTimeout(() => {
				setError('');
			}, 2000);

			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError('Por favor, introduce un correo electrónico válido.');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
		}

		postLogin(email, password);
	};
	return (
		<>
			<div className="login container col-lg-5 col-md-8 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center">
				<div className="form-container card border-secondary p-5 rounded border w-100 mx-auto">
					<form onSubmit={handleLogin}>
						<h3 className="text-center pb-3">Iniciar Sesión</h3>
						{error && <div className="alert alert-danger">{error}</div>}
						<div className="mb-3">
							<label htmlFor="email">Correo</label>
							<input
								type="email"
								placeholder="Correo"
								className="form-control"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								maxLength={30}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="password">Contraseña</label>
							<input
								type="password"
								placeholder="Contraseña"
								className="form-control"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								maxLength={30}
							/>
						</div>

						<div className="mb-3">
							<input
								type="checkbox"
								className="custom-control custom-checkbox"
								id="check"
							/>
							<label htmlFor="check" className="custom-input-label mx-2">
								Recuerdame
							</label>
						</div>

						<div className="d-grid">
							<button className="btn btn-primary">Enviar</button>
						</div>
						<div className="parrafo d-flex justify-content-between align-items-center mt-3">
							<p className="text-end mt-2 ">
								<Link to="/contraseña">¿Olvidaste tu Contraseña?</Link>
							</p>
							<p className="mt-2">
								¿No estás registrado?
								<Link to="/register" className="me-2">
									Registro
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};
