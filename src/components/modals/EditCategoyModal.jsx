import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { editCategory } from '../../api/adminCategory.js';

export const EditCategoryModal = ({ category, closeModal }) => {
	const [editedCategory, setEditedCategory] = useState({
		name: category.name,
		description: category.description,
		_id: category._id,
	});
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedCategory({ ...editedCategory, [name]: value });
	};

	const handleSaveChanges = () => {
		const { name, description } = editedCategory;

		if (!name || !description) {
			setError('Por favor, complete todos los campos.');
			return;
		}

		editCategory(editedCategory);
		closeModal();
	};

	return (
		<Modal show={true} onHide={closeModal}>
			<div className="d-flex justify-content-between align-items-center mt-4 mx-3">
				<Modal.Title>Editar Categoria</Modal.Title>
				<button
					type="button"
					className="btn-close"
					aria-label="Close"
					onClick={closeModal}
				></button>
			</div>
			{error && <div className="alert alert-danger my -2 mx-2">{error}</div>}
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
						value={editedCategory.name}
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
