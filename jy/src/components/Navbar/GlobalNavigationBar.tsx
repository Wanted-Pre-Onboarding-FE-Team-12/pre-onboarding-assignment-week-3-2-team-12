import styled from 'styled-components';

const GlobalNavigationBar = () => {
	return <Navigation>Sparkpet</Navigation>;
};

export default GlobalNavigationBar;

/** style */
const Navigation = styled.nav`
	padding: 2rem 1.5rem;
	background-color: #01579b;
	text-align: center;
	font-weight: bold;
	color: #fff;
	font-size: 2rem;
	text-shadow: 2px 2px #757575;
`;
