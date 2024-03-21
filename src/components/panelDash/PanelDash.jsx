import React, { useState, useEffect } from 'react';

import './panelDash.css';
import { NavbarDash } from '../navbarDash/NavbarDash';
import { CardDash } from '../cardDash/CardDash';

import { UserTable } from '../tables/UserTable';
import { ProductTable } from '../tables/ProductTable';
import { CategoryTable } from '../tables/CategoryTable';

export const PanelDash = ({ Toggle }) => {
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedTable, setSelectedTable] = useState('users');

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	const handleCardClick = (tableName) => {
		setSelectedTable(tableName);
		setCurrentPage(1);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const renderTable = () => {
		let indexOfLastItem, indexOfFirstItem, currentItems, totalPages;
		switch (selectedTable) {
			case 'users':
				indexOfLastItem = currentPage * itemsPerPage;
				indexOfFirstItem = indexOfLastItem - itemsPerPage;
				currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
				totalPages = Math.ceil(users.length / itemsPerPage);

				return (
					<div>
						<UserTable users={currentItems} setUsers={setUsers} />
						<div className="py-4 pagination-container d-flex justify-content-center">
							<ul className="pagination">
								{Array.from({ length: totalPages }).map((_, index) => (
									<li
										key={index}
										className={`page-item ${
											currentPage === index + 1 ? 'active' : ''
										}`}
									>
										<button
											className="page-link"
											onClick={() => handlePageChange(index + 1)}
										>
											{index + 1}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				);
			case 'products':
				indexOfLastItem = currentPage * itemsPerPage;
				indexOfFirstItem = indexOfLastItem - itemsPerPage;
				currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
				totalPages = Math.ceil(users.length / itemsPerPage);

				return (
					<div>
						<ProductTable products={currentItems} setProducts={setProducts} />
						<div className="py-4 pagination-container d-flex justify-content-center">
							<ul className="pagination">
								{Array.from({ length: totalPages }).map((_, index) => (
									<li
										key={index}
										className={`page-item ${
											currentPage === index + 1 ? 'active' : ''
										}`}
									>
										<button
											className="page-link"
											onClick={() => handlePageChange(index + 1)}
										>
											{index + 1}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				);

			case 'categories':
				return (
					<div>
						<CategoryTable categories={categories} setCategories={setCategories} />
						<div className="py-4 pagination-container d-flex justify-content-center">
							<ul className="pagination">
								{Array.from({ length: totalPages }).map((_, index) => (
									<li
										key={index}
										className={`page-item ${
											currentPage === index + 1 ? 'active' : ''
										}`}
									>
										<button
											className="page-link"
											onClick={() => handlePageChange(index + 1)}
										>
											{index + 1}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<div className="container">
				{/* 	<NavbarDash Toggle={Toggle} /> */}
				<div className="cards">
					<div className="cards-item">
						<div onClick={() => handleCardClick('users')}>
							<CardDash title={'Usuarios'} total={users.length} />
						</div>
					</div>

					<div className="cards-item">
						<div onClick={() => handleCardClick('products')}>
							<CardDash title={'Productos'} total={products.length} />
						</div>
					</div>

					<div className="cards-item mb-5">
						<div onClick={() => handleCardClick('categories')}>
							<CardDash title={'Categorias'} total={categories.length} />
						</div>
					</div>
				</div>

				{renderTable()}
			</div>
		</>
	);
};
