import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user')) || null;

	if (user.rol === 'admin') {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};
