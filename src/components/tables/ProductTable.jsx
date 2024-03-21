import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { getProducts, delProduct } from '../../api/adminProducts';
import { AddProductModal } from '../modals/AddProductModal';
import { EditProductModal } from '../modals/EditProductModal';

export const ProductTable = ({ products, setProducts }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

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

	return (
		<>
			<div className="d-flex justify-content-between mb-3">
				<Link to="/" type="button" className="btn btn-primary mx-1">
					Inicio
				</Link>
				<button
					className="btn btn-primary btn btn-primary"
					onClick={openAddProductModal}
				>
					Agregar Productos
				</button>
				{modalVisible && (
					<AddProductModal closeModal={() => setModalVisible(false)} />
				)}
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
						{products.map((product, index) => (
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
