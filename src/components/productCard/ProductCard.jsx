import React from 'react';
import { Link } from 'react-router-dom';

import './productCard.css';
import Card from 'react-bootstrap/Card';

export const ProductCard = ({ product }) => {
	return (
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
				<Link
					className="btn btn-outline-primary fw-bold "
					to={`/product${product.key}`}
				>
					Ver Mas
				</Link>
			</Card.Body>
		</Card>
	);
};
