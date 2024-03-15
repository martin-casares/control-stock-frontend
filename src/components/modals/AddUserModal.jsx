import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { addUser } from '../../api/adminUsers.js';

export const AddUserModal = ({ closeModal }) => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		rol: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSaveChanges = async () => {
		const { firstName, lastName, email, rol, password } = user;

		if (!firstName || !lastName || !email || !rol || !password) {
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
		try {
			const success = await addUser(user);
			if (success) {
				closeModal();
			}
		} catch (error) {
			console.error(error);
			setError(
				error.message ||
					'Error al agregar usuario. Por favor, inténtalo de nuevo más tarde.'
			);
		}
	};

	return (
		<Modal show={true} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>
					Agregar Usuario
					{error && <div className="alert alert-danger">{error}</div>}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="mb-3">
					<label htmlFor="firstName" className="form-label">
						Nombre
					</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						name="firstName"
						value={user.firstName}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="lastName" className="form-label">
						Apellido
					</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						name="lastName"
						value={user.lastName}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={user.email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="rol" className="form-label">
						Rol
					</label>
					<input
						type="text"
						className="form-control"
						id="rol"
						name="rol"
						value={user.rol}
						onChange={handleInputChange}
					/>
					<div className="mb-3">
						<label htmlFor="rol" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={user.password}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button className="btn btn-primary" onClick={handleSaveChanges}>
					Guardar Cambios
				</button>
				<button className="btn btn-secondary" onClick={closeModal}>
					Cancelar
				</button>
			</Modal.Footer>
		</Modal>
	);
};
