import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { editProduct } from '../../api/adminProducts.js';

export const EditProductModal = ({ product, closeModal }) => {
	const [editedProduct, setEditedProduct] = useState({
		name: product.name,
		description: product.description,
		price: product.price,
		stock: product.stock,
		_id: product._id,
	});
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedProduct({ ...editedProduct, [name]: value });
	};

	const handleSaveChanges = () => {
		const { name, description, price, stock } = editedProduct;

		if (!name || !description || !price || !stock) {
			setError('Por favor, complete todos los campos.');
			return;
		}

		// Validaciones adicionales si es necesario

		editProduct(editedProduct);
		closeModal();
	};

	return (
		<Modal show={true} onHide={closeModal}>
			<div className="d-flex justify-content-between mx-3 align-items-center mt-4">
				<Modal.Title>Editar Producto</Modal.Title>
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
						value={editedProduct.name}
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
						value={editedProduct.description}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Precio
					</label>
					<input
						type="text"
						className="form-control"
						id="price"
						name="price"
						value={editedProduct.price}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="stock" className="form-label">
						Cantidad
					</label>
					<input
						type="text"
						className="form-control"
						id="stock"
						name="stock"
						value={editedProduct.stock}
						onChange={handleInputChange}
					/>
				</div>
				{/* 	<div className="mb-3">
					<label htmlFor="category" className="form-label">
						Categoría
					</label>
					<input
						type="text"
						className="form-control"
						id="category"
						name="category"
						value={editedProduct.category}
						onChange={handleInputChange}
					/>
				</div> */}
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
