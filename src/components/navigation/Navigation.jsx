import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';

import './navigation.css';
11;

export const Navigation = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('user'));

	const handleLogout = () => {
		localStorage.removeItem('user');
		navigate('/login', { replace: true });
	};

	const isAdmin = (user) => {
		return user.rol === 'admin';
	};

	return (
		<Navbar expand="lg nav-container ">
			<Navbar.Brand as={Link} to="/">
				<div className="mt-1">
					<strong className="title text-danger">Rolling Stock</strong>
				</div>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="menu">
				{user && isAdmin(user) ? (
					<Nav className="fw-bold w-100 justify-content-center">
						<Nav.Link as={Link} to="/" style={{ color: 'white' }}>
							<strong>Inicio</strong>
						</Nav.Link>
						<Nav.Link as={Link} to="/profile" style={{ color: 'white' }}>
							<strong>Perfil</strong>
						</Nav.Link>
						<Nav.Link as={Link} to="/dashboard" style={{ color: 'white' }}>
							<strong>Dashboard</strong>
						</Nav.Link>{' '}
					</Nav>
				) : (
					<Nav className="mx-auto fw-bold">
						<Nav.Link as={Link} to="/" style={{ color: 'white' }}>
							<strong>Inicio</strong>
						</Nav.Link>
						<Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
							<strong>Sobre Nosotros</strong>
						</Nav.Link>
						<Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>
							<strong>Contacto</strong>
						</Nav.Link>
					</Nav>
				)}

				<Nav>
					{!user ? (
						<Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
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
												className="img-user"
											/>

											<strong style={{ paddingTop: '5px', color: 'white' }}>
												{user.firstName}
											</strong>
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
							<NavDropdown.Item as={Link} to="/profile" style={{ color: 'white' }}>
								<strong>Perfil</strong>
							</NavDropdown.Item>
							{user && isAdmin(user) ? (
								<NavDropdown.Item
									as={Link}
									to="/dashboard"
									style={{ color: 'white' }}
								>
									<strong>Dashboard</strong>
								</NavDropdown.Item>
							) : (
								''
							)}
							<NavDropdown.Item onClick={handleLogout} style={{ color: 'white' }}>
								<strong>Logout</strong>
							</NavDropdown.Item>
						</NavDropdown>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
