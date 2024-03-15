import api from './api.js';
import Swal from 'sweetalert2';

/* Traer todas las categorias de la api */
export const getCategories = async () => {
	try {
		const token = localStorage.getItem('token');

		const res = await api.get('/api/categories', {
			headers: {
				'x-token': token,
			},
		});

		return res.data;
	} catch (error) {
		console.log(error);
	}
};

/* Agregar una nueva categoria */
export const addCategory = async (category) => {
	const { name, description } = category;

	try {
		const token = localStorage.getItem('token');
		await api.post(
			'/api/category-add',
			{
				name,
				description,
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
			throw new Error('Error al agregar la categoria');
		}
	}
};

/* Editar Categoria */
export const editCategory = async ({ name, description, _id }) => {
	try {
		const token = localStorage.getItem('token');
		await api.put(
			`/api/category/${_id}`,
			{
				name,
				description,
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

/* Eliminar un Categoryto */
export const delCategory = async (id) => {
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
			const res = await api.delete(`/api/category/${id}`, {
				headers: {
					'x-token': token,
				},
			});

			Swal.fire('Eliminado!', 'La categoria ha sido eliminada.', 'success');
		}
	} catch (error) {
		console.log(error);
		Swal.fire(
			'Error',
			'Ha ocurrido un error al intentar eliminar la Categoria.',
			'error'
		);
	}
};
