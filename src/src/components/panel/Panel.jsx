import React, { useState, useEffect } from 'react';

import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import api from '../../api/api.js';
import { NavbarDash } from '../navbarDash/NavbarDash';
import { CardDash } from '../cardDash/CardDash';

export const Panel = ({ Toggle }) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			const res = await api.get('/api/users');

			setUsers(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="px-3">
			<NavbarDash Toggle={Toggle} />
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<CardDash title={'Usuarios'} total={users.length} />
				<CardDash title={'Productos'} total={123} />
				<CardDash title={'Categorias'} total={12} />
			</div>

			<table className="table caption-top bg-white rounded mt-2">
				<caption className="text-white fs-4">Listado de Usuarios</caption>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Email</th>
						<th scope="col">Rol</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.email}</td>
							<td>{user.rol}</td>
							<td>
								<button className="btn btn-success mx-1">
									<FaEdit size={20} />
								</button>
								<button className="btn btn-danger mx-1">
									<MdDelete size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
