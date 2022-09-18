import { GlobalResetStyle } from 'styles/style';
import GlobalNavigationBar from 'components/Navbar/GlobalNavigationBar';
import Main from 'pages/Main/Main';

function App(): JSX.Element {
	return (
		<>
			<GlobalResetStyle />
			<GlobalNavigationBar />
			<Main />
		</>
	);
}

export default App;
