import styled, { keyframes } from 'styled-components';

const Loading = () => {
	return (
		<LoadingContainer className="loading">
			<div></div>
			<div></div>
			<div></div>
		</LoadingContainer>
	);
};

export default Loading;

const LoadingKeyFrame = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const LoadingContainer = styled.div`
	display: inline-block;
	transform: translateZ(1px);
	top: 50%;
	left: 50%;

	& > div {
		display: inline-block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		background: P — Light;
		animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	animation: ${LoadingKeyFrame} 1s linear infinite;
`;
