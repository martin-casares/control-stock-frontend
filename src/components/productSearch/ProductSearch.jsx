import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './productSearch.css';

export const ProductSearch = ({ setSearchTerm }) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim() === '') {
			setError(true);
			return;
		}
		//setError(false);
		setSearchTerm(value.trim());
		//setValue('');
	};

	const handleChange = (e) => {
		const searchTerm = e.target.value.trim();
		setValue(e.target.value);
		setError(false);
		setSearchTerm(searchTerm !== '' ? searchTerm : '');
	};

	return (
		<>
			<div className="d-flex justify-content-center mb-5 col-xs-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
				<form onSubmit={handleSubmit}>
					{error ? (
						<div className="error alert alert-danger m-3">
							El campo no puede estar vacío...
						</div>
					) : (
						''
					)}
					<div className="div-input d-flex" style={{ outline: 'none' }}>
						<input
							className="form-control input-search"
							type="text"
							placeholder="Buscar Producto"
							onChange={handleChange}
							value={value}
						/>
						<button
							type="submit"
							className=""
							style={{
								color: 'text-secondary',
								backgroundColor: 'transparent',
								border: 'none',
							}}
						>
							<FaSearch className="" size={32} />
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
