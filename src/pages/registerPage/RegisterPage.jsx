import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import './registerPage.css';
import api from '../../api/api.js';
import { Footer } from '../../components/footer/Footer';

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
			navigate('/login');
		} catch (error) {
			console.log(error.response.data.message);
			setError(error.response.data.message);
			setTimeout(() => {
				setError('');
			}, 2000);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		if (!firstName || !lastName || !email || !password || !confirmPassword) {
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

		if (password.length < 6) {
			setError('La contraseña debe tener al menos 6 caracteres.');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
		}

		if (password !== confirmPassword) {
			setError('Las contraseñas no coinciden');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
		}

		postRegister(firstName, lastName, email, password, confirmPassword);
	};

	return (
		<>
			<div className="register container col-lg-5 col-md-8 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center pt-5">
				<div className="card border-secondary p-5 rounded border w-100 mx-auto">
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
						<div className="mb-3">
							<label htmlFor="nombre">Nombre</label>
							<input
								type="nombre"
								placeholder="Nombre"
								className="form-control"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								maxLength={30}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="apellido">Apellido</label>
							<input
								type="apellido"
								placeholder="Apellido"
								className="form-control"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								maxLength={20}
							/>
						</div>
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
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="password">Confirmar Contraseña</label>
							<input
								type="password"
								placeholder="Confirmar Contraseña"
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
						<div className="parrafo d-flex justify-content-between align-items-center mt-3">
							<p className="text-end mt-3 ">¿Ya estás registrado? </p>
							<p className="mt-3">
								<Link to="/login" className="">
									Iniciar Sesión
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
