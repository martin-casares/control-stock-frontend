import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import emailjs from 'emailjs-com';
import { MdContactMail } from 'react-icons/md';
import { Footer } from '../../components/footer/Footer';

export const ContactPage = () => {
	const form = useRef();
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!fullName || !email || !message) {
			/* 	await Swal.fire({
				icon: 'error',
				title: 'Campos vacíos',
				text: 'Por favor, completa todos los campos del formulario.',
			}); */
			setError('Por favor, completa todos los campos del formulario.');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			/* 	await Swal.fire({
				icon: 'error',
				title: 'Email no valido',
				text: 'Por favor, ingresa un email valido.',
			}); */
			setError('Por favor, ingresa un email valido.');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
		}

		try {
			await emailjs.sendForm(
				'service_5j3az7j',
				'template_mu6tyns',
				form.current,
				'dYHqmpMq_7MR0wfEq'
			);

			e.target.reset();
			setFullName('');
			setEmail('');
			setMessage('');
			/* 
			await Swal.fire({
				icon: 'success',
				title: '¡Éxito!',
				text: 'El formulario se ha enviado correctamente.',
			}); */

			setError('El formulario se ha enviado correctamente.');
			setTimeout(() => {
				setError('');
			}, 2000);
		} catch (error) {
			await Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Hubo un problema al enviar el formulario. Inténtalo de nuevo.',
			});
		}
	};
	return (
		<>
			<div className="container mt-5 col-lg-6 col-md-8 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center">
				<div className="card border-secondary mb-5  w-100 mx-auto py-5">
					<h2 className="fw-bold my-5 text-center text-white/60 ">
						<MdContactMail size={40} className="ms-3" />
						Contacto
					</h2>
					{error && (
						<div
							style={{ width: '75%', margin: 'auto', marginBottom: '20px' }}
							className="alert alert-danger"
						>
							{error}
						</div>
					)}

					<div className="d-flex justify-content-center align-items-center rounded border ">
						<form
							ref={form}
							onSubmit={sendEmail}
							className="w-75 d-flex flex-column gap-4 mb-5"
						>
							<input
								name="fullName"
								type="text"
								placeholder="Nombre Completo"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								className="form-control rounded-lg p-3 text-white/70 fw-semibold"
								maxLength={20}
							/>

							<input
								name="email"
								type="email"
								id="floatingInput"
								placeholder="Correo"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="form-control rounded-lg p-3 text-white/70 fw-semibold"
								maxLength={30}
							/>

							<textarea
								type="text"
								name="message"
								placeholder="Mensaje"
								rows={6}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="form-control rounded-lg p-3 text-white/70 fw-semibold"
								maxLength={100}
							/>

							<button
								type="submit"
								className="btn btn-primary mt-4 p-3 fw-semibold "
							>
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
