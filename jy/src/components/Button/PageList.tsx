import { useSelector } from 'react-redux';
import { RootState } from '_module';
import Button from './Button';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const PageList = () => {
	/** total page 가져와서 보여줄 한 페이지 당 보여줄 페이지 갯수로 나눠서 페이지 버튼 보여주기  */
	const { totalComments } = useSelector(({ comment }: RootState) => comment);
	const limit = 5;
	const totalPage = Math.ceil(Number(totalComments) / limit);
	// useState에 currentPage 정보 담기, state 업데이트 함수 실행시키면 currentPage + 1, 서버로 재 요청 보내기
	const [currentPage, setCurrentPage] = useState(1);

	// currentPage 변경 함수
	const handleUpdateCurrentPage = (page: number) => {
		setCurrentPage(page);
	};

	// currentPage 정보 변경 시 마다 page nation 재 요청
	useEffect(() => {
		console.log('pagenation..');
	}, [currentPage]);

	return (
		<PageListContainer>
			{Array(totalPage)
				.fill(1)
				.map((_, idx: number) => (
					<Button key={idx} page={idx + 1} handleUpdateCurrentPage={handleUpdateCurrentPage} />
				))}
		</PageListContainer>
	);
};

export default PageList;

const PageListContainer = styled.div`
	text-align: center;
	margin: 3rem 0;
`;
