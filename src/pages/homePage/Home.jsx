import React, { useState } from 'react';

import './home.css';
import { ListProduct } from '../../components/listProduct/ListProduct';
import { Header } from '../../components/header/Header';
import { ProductSearch } from '../../components/productSearch/ProductSearch';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
			<Header />
			<ProductSearch setSearchTerm={setSearchTerm} />
			<div className="container ">
				<ListProduct searchTerm={searchTerm} />
			</div>
			<Footer />
		</>
	);
};
