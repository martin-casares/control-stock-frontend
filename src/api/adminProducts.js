import api from './api.js';
import Swal from 'sweetalert2';

/* Traer toddos los usuarios de la api */
export const getProducts = async () => {
	try {
		const token = localStorage.getItem('token');

		const res = await api.get('/api/products', {
			headers: {
				'x-token': token,
			},
		});

		return res.data;
	} catch (error) {
		console.log(error);
	}
};

/* Agregar un nuevo producto */
export const addProduct = async (product) => {
	const { name, description, price, stock, category, image } = product;

	try {
		const token = localStorage.getItem('token');

		await api.post(
			'/api/product-add',
			{
				name,
				description,
				price,
				stock,
				category,
				image,
			},
			{
				headers: {
					'x-token': token,
				},
			}
		);
		return true;
	} catch (error) {
		console.log(error);
		if (error.response && error.response.data && error.response.data.message) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error('Error al agregar producto');
		}
	}
};

/* Editar producto */
export const editProduct = async ({ name, description, price, stock, _id }) => {
	try {
		const token = localStorage.getItem('token');
		await api.put(
			`/api/product/${_id}`,
			{
				name,
				description,
				price,
				stock,
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

/* Eliminar un producto */
export const delProduct = async (id) => {
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
			const res = await api.delete(`/api/product/${id}`, {
				headers: {
					'x-token': token,
				},
			});

			Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
		}
	} catch (error) {
		console.log(error);
		Swal.fire(
			'Error',
			'Ha ocurrido un error al intentar eliminar el producto.',
			'error'
		);
	}
};
