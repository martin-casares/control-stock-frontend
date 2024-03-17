import React, { useEffect, useState } from 'react';

import './listProduct.css';

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
			<div className="select-container m-auto col-xs-12 col-sm-8 col-md-6 col-lg-4  mb-5">
				<select
					className="form-select"
					aria-label="Size 3 select"
					id="category"
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option className="select-option" value="">
						Todas las Categorías
					</option>
					{categories.map((category) => (
						<option
							className="select-option"
							key={category._id}
							value={category._id}
						>
							{category.name}
						</option>
					))}
				</select>
			</div>
			{loading ? (
				<div className="row ">
					{filteredProducts.map((product) => {
						return (
							<div
								className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mx-auto"
								key={product._id}
							>
								<ProductCard product={product} />
							</div>
						);
					})}
				</div>
			) : (
				<p>Cargando...</p>
			)}
		</div>
	);
};
