import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { addCategory } from '../../api/adminCategory.js';

export const AddCategoryModal = ({ closeModal }) => {
	const [category, setCategory] = useState({
		name: '',
		description: '',
	});
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCategory({ ...category, [name]: value });
	};

	const handleSaveChanges = async () => {
		const { name, description } = category;

		if (!name || !description) {
			setError('Por favor, complete todos los campos.');
			return;
		}

		try {
			await addCategory(category);
			closeModal();
		} catch (error) {
			console.error(error);
			setError(
				error.message ||
					'Error al agregar la categoría. Por favor, inténtalo de nuevo más tarde.'
			);
		}
	};

	return (
		<Modal show={true} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>
					Agregar Categoría
					{error && <div className="alert alert-danger fs-5">{error}</div>}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Nombre
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={category.name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Descripción
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
						name="description"
						value={category.description}
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
