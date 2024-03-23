import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './productTable.css';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { getProducts, delProduct } from '../../api/adminProducts';
import { AddProductModal } from '../modals/AddProductModal';
import { EditProductModal } from '../modals/EditProductModal';

export const ProductTable = ({ products, setProducts }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const fetchedProducts = await getProducts();
				setProducts(fetchedProducts);
			} catch (error) {
				console.error('Error al obtener productos:', error);
			}
		};
		fetchProducts();
	}, [products]);

	const openEditProductModal = (product) => {
		setSelectedProduct(product);
	};
	const openAddProductModal = () => {
		setModalVisible(true);
	};

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<div className="form-content d-flex flex-row justify-content-between">
				<div className="form-btns w-100 mx-auto d-flex justify-content-between  mb-3">
					<div>
						<Link to="/" type="button" className="btn btn-primary">
							Inicio
						</Link>
					</div>

					<div>
						<button className="btn btn-primary" onClick={openAddProductModal}>
							Agregar Producto
						</button>
						{modalVisible && (
							<AddProductModal closeModal={() => setModalVisible(false)} />
						)}
					</div>
				</div>
				<div className="form-input me-auto d-flex justify-content-end ">
					<input
						type="text"
						className="form-control"
						placeholder="Buscar productos..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="table-responsive">
				<table className="table caption-top table-hover table-sm table-striped table-dark rounded mt-2">
					<thead>
						<tr className="table-info">
							<th scope="col">#</th>
							<th scope="col">Producto</th>
							<th scope="col">Descripcion</th>
							<th scope="col">Precio</th>
							<th scope="col">Cantidad</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{filteredProducts.map((product, index) => (
							<tr key={index}>
								<th scope="row">{index + 1}</th>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>{product.price}</td>
								<td>{product.stock}</td>

								<td>
									<button
										className="btn btn-light mx-1"
										onClick={() => openEditProductModal(product)}
									>
										<FaEdit size={20} />
									</button>
									<button
										className="btn btn-danger mx-1"
										onClick={() => delProduct(product._id)}
									>
										<MdDelete size={20} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
					{selectedProduct && (
						<EditProductModal
							product={selectedProduct}
							closeModal={() => setSelectedProduct(null)}
						/>
					)}
				</table>
			</div>
		</>
	);
};
