import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalResetStyle } from 'styles/style';
import GlobalNavigationBar from 'components/Navbar/GlobalNavigationBar';
import Main from 'pages/Main/Main';

function App(): JSX.Element {
	return (
		<Router>
			<GlobalResetStyle />
			<GlobalNavigationBar />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Router>
	);
}

export default App;
