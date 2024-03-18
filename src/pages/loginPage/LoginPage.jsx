import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './loginPage.css';
import api from '../../api/api.js';

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

			navigate('/dashboard');
			console.log('Inicio de sesión exitoso:', resp.data.message);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();

		if (!email || !password) {
			setError('Por favor, complete todos los campos.');
			return;
		}
		postLogin(email, password);
	};
	return (
		<div className="login d-flex justify-content-center align-items-center">
			<div className="form_container p-5 rounded border">
				<form onSubmit={handleLogin}>
					<h3 className="text-center">Login</h3>
					{error && <div className="alert alert-danger">{error}</div>}
					<div className="mb-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							placeholder="Email"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							maxLength={30}
						/>
					</div>

					<div className="mb-2">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							placeholder="Password"
							className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							maxLength={30}
						/>
					</div>

					<div className="mb-2">
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
						<button className="btn btn-primary">Login</button>
					</div>
					<p className="text-end mt-2">
						Olvidaste tu <Link to="">Contraseña?</Link>
						<Link to="/register" className="ms-2">
							Registro
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
