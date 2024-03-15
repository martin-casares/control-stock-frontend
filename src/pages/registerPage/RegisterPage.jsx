import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './registerPage.css';
import api from '../../api/api.js';

export const RegisterPage = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const postRegister = async (
		firstName,
		lastName,
		email,
		password,
		confirmPassword
	) => {
		try {
			const resp = await api.post('/api/register', {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
			});

			localStorage.setItem('token', resp.data.token);
			navigate('/');
		} catch (error) {
			console.log(error.response.data.message);
			setError(error.response.data.message);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			setError('Por favor, complete todos los campos.');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError('Por favor, introduce un correo electrónico válido.');
			return;
		}

		if (password.length < 6) {
			setError('La contraseña debe tener al menos 6 caracteres.');
			return;
		}

		if (password !== confirmPassword) {
			setError('Las contraseñas no coinciden');
			return;
		}

		postRegister(firstName, lastName, email, password, confirmPassword);
	};

	return (
		<div className="register template d-flex justify-content-center align-items-center vh-100 bg-primary">
			<div className="form_container p-5 rounded bg-white">
				<form
					onSubmit={(e) =>
						handleRegister(
							e,
							firstName,
							lastName,
							email,
							password,
							confirmPassword,
							setError,
							navigate
						)
					}
				>
					<h3 className="text-center">Registro</h3>
					{error && <div className="alert alert-danger">{error}</div>}
					<div className="mb-2">
						<label htmlFor="nombre">Nombre</label>
						<input
							type="nombre"
							placeholder="Nombre"
							className="form-control"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="apellido">Apellido</label>
						<input
							type="apellido"
							placeholder="Apellido"
							className="form-control"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							placeholder="Email"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
						/>
					</div>

					<div className="mb-2">
						<label htmlFor="password">Confirmar Password</label>
						<input
							type="password"
							placeholder="Confirmar Password"
							className="form-control"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>

					<div className="d-grid">
						<button type="submit" className="btn btn-primary">
							Registro
						</button>
					</div>
					<p className="text-end mt-2">
						Ya estás registrado <Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
