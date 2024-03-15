import api from './api.js';
import Swal from 'sweetalert2';

/* Traer toddos los usuarios de la api */
export const getUsers = async () => {
	try {
		const token = localStorage.getItem('token');

		const res = await api.get('/api/users', {
			headers: {
				'x-token': token,
			},
		});

		return res.data;
	} catch (error) {
		console.log(error);
	}
};

/* Agregar un nuevo usuario */
export const addUser = async (user) => {
	const { firstName, lastName, email, rol, password } = user;

	try {
		const token = localStorage.getItem('token');
		await api.post(
			'/api/user-add',
			{
				firstName,
				lastName,
				email,
				rol,
				password,
			},
			{
				headers: {
					'x-token': token,
				},
			}
		);
		return true;
	} catch (error) {
		console.log(error.response);
		if (error.response && error.response.data && error.response.data.message) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error('Error al agregar usuario');
		}
	}
};

/* Editar un usuario */
export const editUser = async ({
	firstName,
	lastName,
	email,
	rol,
	password,
	_id,
}) => {
	try {
		const token = localStorage.getItem('token');
		await api.put(
			`/api/user/${_id}`,
			{
				firstName,
				lastName,
				email,
				rol,
				password,
				_id,
			},
			{
				headers: {
					'x-token': token,
				},
			}
		);
	} catch (error) {
		console.log(error);
	}
};

/* Eliminar un usuario */
export const delUser = async (id) => {
	try {
		const token = localStorage.getItem('token');

		const result = await Swal.fire({
			title: '¿Estás seguro?',
			text: '¡No podrás revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminarlo',
		});

		if (result.isConfirmed) {
			const res = await api.delete(`/api/user/${id}`, {
				headers: {
					'x-token': token,
				},
			});

			Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success');
		}
	} catch (error) {
		console.log(error);
		Swal.fire(
			'Error',
			'Ha ocurrido un error al intentar eliminar el usuario.',
			'error'
		);
	}
};
