import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { editUser } from '../../api/adminUsers.js';

export const EditUserModal = ({ user, closeModal }) => {
	const [editedUser, setEditedUser] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		rol: user.rol,
		_id: user._id,
	});
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedUser({ ...editedUser, [name]: value });
	};

	const handleSaveChanges = () => {
		const { firstName, lastName, email, rol, password } = editedUser;

		if (!firstName || !lastName || !email || !rol) {
			setError('Por favor, complete todos los campos.');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError('Por favor, introduce un correo electrónico válido.');
			return;
		}

		editUser(editedUser);
		closeModal();
	};

	return (
		<Modal show={true} onHide={closeModal}>
			<div className="d-flex justify-content-between mx-3 align-items-center mt-4">
				<Modal.Title>Editar Usuario</Modal.Title>
				<button
					type="button"
					className="btn-close"
					aria-label="Close"
					onClick={closeModal}
				></button>
			</div>
			{error && <div className="alert alert-danger my-2 mx-2">{error}</div>}
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
						value={editedUser.firstName}
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
						value={editedUser.lastName}
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
						value={editedUser.email}
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
						value={editedUser.rol}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="rol" className="form-label">
						Password
					</label>
					<input
						type="text"
						className="form-control"
						id="password"
						name="password"
						value={editUser.password}
						onChange={handleInputChange}
					/>
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

export default EditUserModal;
