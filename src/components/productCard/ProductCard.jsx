import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

export const ProductCard = ({ product }) => {
	return (
		<Card style={{ width: '18rem' }} className="m-3">
			<Card.Img
				variant="top"
				src={product.image}
				style={{ height: '300px', objectFit: 'cover', objectPosition: 'top' }}
			/>
			<Card.Body>
				<Card.Title>
					{product.name}
					{/* {product.description.substring(0, 21)} */}
				</Card.Title>
				<Link className="btn fw-bold " to={`/product${product.key}`}>
					Ver Mas
				</Link>
			</Card.Body>
		</Card>
	);
};
