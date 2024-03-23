import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user')) || null;

	if (!user || !user.rol || user.rol !== 'admin') {
		return <Navigate to="/" />;
	} else {
		return <Outlet />;
	}
};
