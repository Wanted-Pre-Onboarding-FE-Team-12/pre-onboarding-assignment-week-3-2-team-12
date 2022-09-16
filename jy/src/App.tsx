import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';

function App(): JSX.Element {
	return (
		<div>
			<CommentListContainer />
			<PageListContainer />
			<FormContainer />
		</div>
	);
}

export default App;
