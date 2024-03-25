import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ProductDetailModal = ({
	show,
	handleClose,
	imageSrc,
	description,
	nameProduct,
	price,
	stock,
}) => {
	return (
		<Modal show={show} onHide={handleClose} size="lg" className="">
			<div className="d-flex justify-content-between align-items-center mt-4 mx-3">
				<Modal.Title>Detalle de {nameProduct}</Modal.Title>
				<button
					type="button"
					className="btn-close"
					aria-label="Close"
					onClick={handleClose}
				></button>
			</div>
			<Modal.Body>
				<div className="d-flex justify-content-center">
					<img src={imageSrc} alt="Imagen del producto" className="img-fluid" />
				</div>
				<div className="mt-2">
					<p>{description}</p>
				</div>
				<div className="mt-1">
					<p>
						<strong>Precio:</strong> {price}
					</p>
				</div>
				<div className="mt-1">
					<p>
						<strong>Stock:</strong> {stock}
					</p>
				</div>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-between">
				<Button variant="secondary" disabled onClick={handleClose}>
					Agregar al carrito
				</Button>
				<Button variant="secondary" onClick={handleClose}>
					Cerrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
