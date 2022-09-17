import styled from 'styled-components';

const PageButton = () => {
	return <Page active>1</Page>;
};

export default PageButton;

/** style */
const Page = styled.button<{ active: boolean }>`
	background-color: #e8eaf6;
	cursor: pointer;
	border: none;
	border-radius: 10px;
	outline: none;
	padding: 0.8rem 1rem;
	text-align: center;
	${({ active }) =>
		active &&
		`
		background-color: #0277bd;
		color: #fff;
	`}
`;
