import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RegisterPage } from './pages/registerPage/RegisterPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Home } from './pages/homePage/Home';
import { Navigation } from './components/navigation/Navigation';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
