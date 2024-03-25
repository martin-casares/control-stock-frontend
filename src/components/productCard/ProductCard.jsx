import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import './productCard.css';
import { ProductDetailModal } from '../modals/ProductDetailModal';

export const ProductCard = ({ product }) => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<Card className="card mx-auto m-3">
				<Card.Img
					className="img-fluid"
					variant="top"
					src={product.image}
					style={{ height: '300px', objectFit: 'cover', objectPosition: 'top' }}
				/>
				<Card.Body>
					<Card.Title>
						{product.name}
						{/* {product.description.substring(0, 21)} */}
					</Card.Title>
					<button
						className="btn btn-outline-primary fw-bold "
						/* to={`/product${product.key}`} */
						onClick={handleShowModal}
					>
						Ver Mas
					</button>
				</Card.Body>
			</Card>
			<ProductDetailModal
				show={showModal}
				handleClose={handleCloseModal}
				imageSrc={product.image}
				description={product.description}
				nameProduct={product.name}
				price={product.price}
				stock={product.stock}
			/>
		</>
	);
};
