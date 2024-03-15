import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { ProductCard } from '../productCard/ProductCard';

import { getProducts } from '../../api/adminProducts';
import { getCategories } from '../../api/adminCategory';

export const ListProduct = ({ searchTerm }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const [selectedCategory, setSelectedCategory] = useState('');
	const [categories, setCategories] = useState([]);

	const fetchProducts = async () => {
		try {
			const fetchedProducts = await getProducts();
			setProducts(fetchedProducts);
			setFilteredProducts(fetchedProducts);
			setLoading(true);
		} catch (error) {
			console.error('Error al obtener productos:', error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		const filterProducts = () => {
			if (searchTerm.trim() === '') {
				setFilteredProducts(products);
			} else {
				const filtered = products.filter((product) =>
					product.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
				setFilteredProducts(filtered);
			}
		};

		filterProducts();
	}, [searchTerm, products]);

	/* trae categorias para el select */
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
	}, []);

	/* seleciona productos por  categoria */
	useEffect(() => {
		const filterProductsByCategory = () => {
			if (selectedCategory.trim() === '') {
				setFilteredProducts(products); // Si no se selecciona ninguna categoría, mostrar todos los productos
			} else {
				const filtered = products.filter(
					(product) => product.category === selectedCategory
				);
				setFilteredProducts(filtered);
			}
		};

		filterProductsByCategory();
	}, [selectedCategory, products]);

	return (
		<div>
			<div className="w-25 mx-auto mb-5">
				<select
					className="form-select "
					id="category"
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option value="">Categorías</option>
					{categories.map((category) => (
						<option key={category._id} value={category._id}>
							{category.name}
						</option>
					))}
				</select>
			</div>
			{loading ? (
				<Row xs={1} md={2} lg={4} className="m-3">
					{filteredProducts.map((product) => {
						return (
							<Col key={product._id}>
								<ProductCard product={product} />
							</Col>
						);
					})}
				</Row>
			) : (
				<p>Cargando...</p>
			)}
		</div>
	);
};
