import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';

import './navigation.css';

export const Navigation = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));

	const handleLogout = () => {
		localStorage.removeItem('user');
		navigate('/login', { replace: true });
	};

	return (
		<Navbar expand="lg nav-container">
			<Navbar.Brand as={Link} to="/">
				<strong style={{ fontSize: '40px', textTransform: 'uppercase' }}>TP</strong>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mx-auto fw-bold">
					<Nav.Link as={Link} to="/">
						<strong>Inicio</strong>
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						<strong>Sobre Nosotros</strong>
					</Nav.Link>

					{user ? (
						<Nav.Link as={Link} to="/contact">
							<strong>Contacto</strong>
						</Nav.Link>
					) : (
						''
					)}
				</Nav>
				<Nav>
					{!user ? (
						<Nav.Link as={Link} to="/login">
							<FaUserCircle size={40} style={{ marginRight: '5px' }} />
							<strong>Login</strong>
						</Nav.Link>
					) : (
						<NavDropdown
							title={
								<>
									{user.avatar ? (
										<>
											<img
												src={user.avatar}
												alt={user.firstName}
												width="45px"
												className="mt-2"
												style={{
													width: '45px',
													height: '40px',
													borderRadius: '50%',
													overflow: 'hidden',
													marginRight: '5px',

													border: '3px solid ',
												}}
											/>

											<strong style={{ paddingTop: '4px' }}>{user.firstName}</strong>
										</>
									) : (
										<>
											<FaUserCircle
												size={40}
												style={{ marginRight: '5px', color: '#b8860b' }}
											/>
											<strong style={{ color: '#b8860b', paddingTop: '4px' }}>
												{user.firstName}
											</strong>
										</>
									)}
								</>
							}
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item as={Link} to="/profile">
								<strong>Perfil</strong>
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/dashboard">
								<strong>Dashboard</strong>
							</NavDropdown.Item>
							<NavDropdown.Item onClick={handleLogout}>
								<strong>Logout</strong>
							</NavDropdown.Item>
						</NavDropdown>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
