import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

import { addProduct } from '../../api/adminProducts.js';
import { getCategories } from '../../api/adminCategory';

export const AddProductModal = ({ closeModal }) => {
	const [product, setProduct] = useState({
		name: '',
		description: '',
		price: '',
		stock: '',
		category: '',
		image: '',
	});
	const [error, setError] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [categories, setCategories] = useState([]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	};

	const handleSaveChanges = async () => {
		const { name, description, price, stock, image, category } = product;

		if (!name || !description || !price || !stock || !image) {
			setError('Por favor, complete todos los campos.');
			return;
		}

		try {
			const categoryId = selectedCategory;
			const newProduct = {
				name,
				description,
				price,
				stock,
				image,
				category: categoryId,
			};
			console.log(newProduct);
			const success = await addProduct(newProduct);
			if (success) {
				closeModal();
			}
		} catch (error) {
			console.error(error);
			setError(
				error.message ||
					'Error al agregar producto. Por favor, inténtalo de nuevo más tarde.'
			);
		}
	};

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const fetchedCategories = await getCategories();
				setCategories(fetchedCategories);
			} catch (error) {
				console.error('Error al obtener las categorias:', error);
			}
		};
		fetchCategories();
	}, [categories]);

	return (
		<Modal show={true} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>
					Agregar Producto
					{error && <div className="alert alert-danger">{error}</div>}
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
						value={product.name}
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
						value={product.description}
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
						value={product.price}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="stock" className="form-label">
						Stock
					</label>
					<input
						type="text"
						className="form-control"
						id="stock"
						name="stock"
						value={product.stock}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="image" className="form-label">
						Imagen url
					</label>
					<input
						type="text"
						className="form-control"
						id="image"
						name="image"
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="category">Categoría: </label>
					<select
						id="category"
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
					>
						<option value="">Selecciona una categoría</option>
						{categories.map((category) => (
							<option key={category._id} value={category._id}>
								{category.name}
							</option>
						))}
					</select>
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
