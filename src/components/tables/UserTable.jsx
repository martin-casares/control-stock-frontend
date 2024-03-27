import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { delUser } from '../../api/adminUsers';
import { EditUserModal } from '../modals/EditUserModal';
import { AddUserModal } from '../modals/AddUserModal';

export const UserTable = ({ users, setUsers }) => {
	const [selectedUser, setSelectedUser] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	const openEditModal = (user) => {
		setSelectedUser(user);
	};

	const openAddUserModal = () => {
		setModalVisible(true);
	};

	const isAdmin = (user) => {
		return user.rol === 'admin';
	};

	/* 	const filteredUsers = users.filter((user) =>
		user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
	); */

	return (
		<>
			<div className="form-content d-flex flex-row justify-content-between">
				<div className="form-btns w-100 mx-auto d-flex justify-content-between  mb-3">
					<Link to="/" type="button" className="btn btn-primary mx-1">
						Inicio
					</Link>
					<button
						className="btn btn-primary btn btn-primary"
						onClick={openAddUserModal}
					>
						Agregar Usuarios
					</button>
					{modalVisible && (
						<AddUserModal closeModal={() => setModalVisible(false)} />
					)}
				</div>
			</div>

			<div className="table-responsive">
				<table className="table table-hover table-sm table-striped table-dark mt-2 ">
					<thead>
						<tr className="table-info">
							<th scope="col">#</th>
							<th scope="col">Nombre</th>
							<th scope="col">Apellido</th>
							<th scope="col">Email</th>
							<th scope="col">Rol</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{users
							/* 		.filter((user) => user.rol !== 'admin') */
							.map((user, index) => (
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>{user.firstName}</td>
									<td>{user.lastName}</td>
									<td>{user.email}</td>
									<td>{user.rol}</td>
									<td>
										{/* 	{!isAdmin(user) && ( */}
										<>
											<button
												className="btn btn-light mx-1"
												disabled={isAdmin(user)}
												onClick={() => openEditModal(user)}
											>
												<FaEdit size={20} />
											</button>
											<button
												className="btn btn-danger mx-1"
												disabled={isAdmin(user)}
												onClick={() => delUser(user._id)}
											>
												<MdDelete size={20} />
											</button>
										</>
										{/* )} */}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			{selectedUser && (
				<EditUserModal
					user={selectedUser}
					closeModal={() => setSelectedUser(null)}
				/>
			)}
		</>
	);
};
