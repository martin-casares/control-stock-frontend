import React from 'react';
import './aboutPage.css';
import { Footer } from '../../components/footer/Footer';

export const AboutPage = () => {
	return (
		<>
			<div className="container about d-flex flex-column justify-content-center align-items-center col-lg-6 col-md-8 col-sm-6 col-xs-12">
				<h2 className="about-title">Acerca de Nosotros</h2>
				<h3 className="about-subtitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quisquam?
				</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptates
					tempore ex vero soluta sed cumque reprehenderit odit et id quos alias ab
					repellendus magnam esse qui asperiores fuga quod, ut totam iusto accusamus
					iste porro doloremque. Neque, aliquam beatae. Porro maxime nemo eveniet
					vero? Quis blanditiis id unde molestias.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa at
					excepturi fugit non tempore nostrum. Non placeat natus esse, molestias
					atque a, ipsam repellendus deleniti vel commodi itaque, aliquid quia
					perspiciatis? Aut ipsam perspiciatis, modi labore cumque quisquam aperiam.
				</p>
			</div>
			<Footer />
		</>
	);
};
