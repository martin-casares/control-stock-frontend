import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RegisterPage } from './pages/registerPage/RegisterPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Home } from './pages/homePage/Home';
import { Navigation } from './components/navigation/Navigation';
import { ContactPage } from './pages/contactPage/ContactPage';
import { Page404 } from './pages/Page404/Page404';
import { ProtectedRoute } from './ProtectedRoute';
import { Profile } from './components/profile/Profile';
import { Footer } from './components/footer/Footer';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/*" element={<Page404 />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
