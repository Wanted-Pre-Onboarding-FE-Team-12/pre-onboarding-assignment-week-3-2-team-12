import WriteForm from 'pages/Comment/WriteForm/WriteForm';

interface IProps {
	initializationPage: () => void;
}

function FormContainer({ initializationPage }: IProps): JSX.Element {
	return <WriteForm initializationPage={initializationPage} />;
}

export default FormContainer;
