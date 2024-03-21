import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { addCategory } from '../../api/adminCategory.js';

export const AddCategoryModal = ({ closeModal }) => {
	const [category, setCategory] = useState({
		name: '',
	});
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCategory({ ...category, [name]: value });
	};

	const handleSaveChanges = async () => {
		const { name } = category;

		if (!name) {
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
			<div className="d-flex justify-content-between align-items-center mt-4 mx-3">
				<Modal.Title>Agregar Categoria</Modal.Title>
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
