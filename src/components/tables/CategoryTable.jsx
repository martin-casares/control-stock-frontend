import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { AddCategoryModal } from '../modals/AddCategoyModal';
import { EditCategoryModal } from '../modals/EditCategoyModal';
import { delCategory } from '../../api/adminCategory';

export const CategoryTable = ({ categories }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const openEditCategoryModal = (category) => {
		setSelectedCategory(category);
	};

	const openAddCategoryModal = () => {
		setModalVisible(true);
	};

	return (
		<div>
			<div className="form-content d-flex flex-row justify-content-between">
				<div className="form-btns w-100 mx-auto d-flex justify-content-between  mb-3">
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
			</div>
			<div className="table-responsive">
				<table className="table table-hover table-dark table-sm table-striped rounded mt-2">
					<thead>
						<tr className="table-info">
							<th scope="col">#</th>
							<th scope="col">Categoria</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{categories.map((category, index) => (
							<tr key={index}>
								<th scope="row">{index + 1}</th>
								<td>{category.name}</td>

								<td>
									<button
										className="btn btn-light mx-1"
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
		</div>
	);
};
