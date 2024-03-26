import React, { useState, useEffect } from 'react';

import './panelDash.css';
import { NavbarDash } from '../navbarDash/NavbarDash';
import { CardDash } from '../cardDash/CardDash';

import { UserTable } from '../tables/UserTable';
import { ProductTable } from '../tables/ProductTable';
import { CategoryTable } from '../tables/CategoryTable';
import { getProducts } from '../../api/adminProducts';
import { getCategories } from '../../api/adminCategory';
import { getUsers } from '../../api/adminUsers';

export const PanelDash = ({ Toggle }) => {
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedTable, setSelectedTable] = useState('users');
	const [searchTerm, setSearchTerm] = useState('');

	const [isUsersSelected, setIsUsersSelected] = useState(true);
	const [isProductsSelected, setIsProductsSelected] = useState(false);
	const [isCategoriesSelected, setIsCategoriesSelected] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	const handleCardClick = (tableName) => {
		setSelectedTable(tableName);
		setCurrentPage(1);
		switch (tableName) {
			case 'users':
				setIsUsersSelected(true);
				setIsProductsSelected(false);
				setIsCategoriesSelected(false);
				break;
			case 'products':
				setIsUsersSelected(false);
				setIsProductsSelected(true);
				setIsCategoriesSelected(false);
				break;
			case 'categories':
				setIsUsersSelected(false);
				setIsProductsSelected(false);
				setIsCategoriesSelected(true);
				break;
			default:
				setIsUsersSelected(false);
				setIsProductsSelected(false);
				setIsCategoriesSelected(false);
				break;
		}
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const fetchedUsers = await getUsers();
				setUsers(fetchedUsers);
			} catch (error) {
				console.error('Error al obtener usuarios:', error);
			}
		};
		fetchUsers();
	}, [users]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const fetchedProducts = await getProducts();
				setProducts(fetchedProducts);
			} catch (error) {
				console.error('Error al obtener productos:', error);
			}
		};
		fetchProducts();
	}, [products]);

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
	}, [categories]);

	const renderTable = () => {
		let currentItems, totalPages;
		switch (selectedTable) {
			case 'users':
				const filteredUsers = users.filter((user) =>
					user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
				);
				totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
				currentItems = filteredUsers.slice(
					(currentPage - 1) * itemsPerPage,
					currentPage * itemsPerPage
				);
				return (
					<div>
						<hr className="mt-0 mb-5 w-75 mx-auto" />
						<div className="form-input w-50 mx-auto d-flex justify-content-center ">
							<input
								type="text"
								className="form-control"
								placeholder="Buscar usuarios por apellido"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
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
				const filteredProducts = products.filter((product) =>
					product.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
				totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
				currentItems = filteredProducts.slice(
					(currentPage - 1) * itemsPerPage,
					currentPage * itemsPerPage
				);
				return (
					<div>
						<hr className="mt-0 mb-5 w-75 mx-auto" />
						<div className="form-input w-50 mx-auto d-flex justify-content-center">
							<input
								type="text"
								className="form-control w-100"
								placeholder="Buscar productos..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<ProductTable
							products={currentItems}
							setProducts={setProducts}
							/* 	searchTerm={searchTerm}
							setSearchProduct={setSearchTerm} */
						/>
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
				const filteredCategories = categories.filter((category) =>
					category.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
				totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
				currentItems = filteredCategories.slice(
					(currentPage - 1) * itemsPerPage,
					currentPage * itemsPerPage
				);
				return (
					<div>
						<hr className="mt-0 mb-5 w-75 mx-auto" />
						<div className="form-input w-50  mx-auto d-flex justify-content-end ">
							<input
								type="text"
								className="form-control"
								placeholder="Buscar categorias..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<CategoryTable categories={currentItems} searchTerm={searchTerm} />
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
			<div className="container ">
				{/* 	<NavbarDash Toggle={Toggle} /> */}
				<div className="cards">
					<div className="cards-item">
						<div>
							<CardDash
								title={'Usuarios'}
								total={users.length}
								type="users"
								isSelected={isUsersSelected}
								onClick={() => handleCardClick('users')}
							/>
						</div>
					</div>

					<div className="cards-item">
						<div>
							<CardDash
								title={'Productos'}
								total={products.length}
								type="products"
								isSelected={isProductsSelected}
								onClick={() => handleCardClick('products')}
							/>
						</div>
					</div>

					<div className="cards-item mb-5">
						<div onClick={() => handleCardClick('categories')}>
							<CardDash
								title={'Categorias'}
								total={categories.length}
								type="categories"
								isSelected={isCategoriesSelected}
								onClick={() => handleCardClick('categories')}
							/>
						</div>
					</div>
				</div>

				{renderTable()}
			</div>
		</>
	);
};
