import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { ProductCard } from '../productCard/ProductCard';

import { getProducts } from '../../api/adminProducts';

export const ListProduct = ({ searchTerm }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);

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

	return (
		<div>
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
