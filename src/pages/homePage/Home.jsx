import React, { useState } from 'react';
import { ListProduct } from '../../components/listProduct/ListProduct';
import { Header } from '../../components/header/Header';
import { ProductSearch } from '../../components/productSearch/ProductSearch';

export const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<>
			<Header />
			<ProductSearch setSearchTerm={setSearchTerm} />
			<ListProduct searchTerm={searchTerm} />;
		</>
	);
};
