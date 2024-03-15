import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { getCategories, delCategory } from '../../api/adminCategory';
import { AddCategoryModal } from '../modals/AddCategoyModal';
import { EditCategoryModal } from '../modals/EditCategoyModal';

export const CategoryTable = ({ categories, setCategories }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);

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

	const openEditCategoryModal = (category) => {
		setSelectedCategory(category);
	};

	const openAddCategoryModal = () => {
		setModalVisible(true);
	};

	return (
		<div>
			<div className="d-flex justify-content-between mb-3">
				<Link to="/" type="button" className="btn btn-primary mx-1">
					Inicio
				</Link>
				<button
					className="btn btn-primary btn btn-primary"
					onClick={openAddCategoryModal}
				>
					Agregar Categorias
				</button>
				{modalVisible && (
					<AddCategoryModal closeModal={() => setModalVisible(false)} />
				)}
			</div>
			<table className="table caption-top bg-white rounded mt-2">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Categoria</th>
						<th scope="col">Descripción</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{category.name}</td>
							<td>{category.description}</td>
							<td>
								<button
									className="btn btn-success mx-1"
									onClick={() => openEditCategoryModal(category)}
								>
									<FaEdit size={20} />
								</button>
								<button
									className="btn btn-danger mx-1"
									onClick={() => delCategory(category._id)}
								>
									<MdDelete size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
				{selectedCategory && (
					<EditCategoryModal
						category={selectedCategory}
						closeModal={() => setSelectedCategory(null)}
					/>
				)}
			</table>
		</div>
	);
};
