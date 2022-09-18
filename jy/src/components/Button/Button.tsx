import styled from 'styled-components';

interface IProps {
	key?: number;
	page: number;
	handleUpdateCurrentPage: (page: number) => void;
}

const Button = ({ page, handleUpdateCurrentPage }: IProps) => {
	return (
		<ButtonStyle type="button" onClick={() => handleUpdateCurrentPage(page)}>
			{page}
		</ButtonStyle>
	);
};

export default Button;

/** style */
const ButtonStyle = styled.button`
	background-color: #e8eaf6;
	cursor: pointer;
	border: none;
	border-radius: 10px;
	outline: none;
	padding: 0.8rem 1rem;
	margin-right: 0.5rem;
	:hover {
		font-weight: bold;
		color: #e8eaf6;
		background-color: #9fa8da;
	}
`;
