import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RegisterPage } from './pages/registerPage/RegisterPage';
import { LoginPage } from './pages/loginPage/LoginPage';

import { Home } from './pages/homePage/Home';
import { Navigation } from './components/navigation/Navigation';
import { ContactPage } from './pages/contactPage/ContactPage';
import { ProtectedRoute } from './ProtectedRoute';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { Page404 } from './pages/page404/Page404';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Profile } from './components/profile/Profile';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/profile" element={<Profile />} />
				</Route>

				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
