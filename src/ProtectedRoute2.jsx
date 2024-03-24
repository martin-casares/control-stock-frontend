import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute2 = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user')) || null;

	if (!user || !user.rol || user.rol !== 'user') {
		return <Navigate to="/" />;
	} else {
		return <Outlet />;
	}
};
