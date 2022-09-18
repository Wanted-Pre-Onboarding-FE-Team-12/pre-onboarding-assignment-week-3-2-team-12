import { useSelector } from 'react-redux';
import { RootState } from '_module';
import Button from './Button';
import styled from 'styled-components';

interface IProps {
	handleUpdateCurrentPage: (pageNum: number) => void;
	currentPage: number;
}

const PageList = ({ handleUpdateCurrentPage, currentPage }: IProps) => {
	/** total page 가져와서 보여줄 한 페이지 당 보여줄 페이지 갯수로 나눠서 페이지 버튼 보여주기  */
	const { totalCount } = useSelector(({ comment }: RootState) => comment);
	const limit = 5;
	const totalPage = Math.ceil(Number(totalCount) / limit);

	return (
		<PageListContainer>
			{Array(totalPage)
				.fill(1)
				.map((_, idx: number) => (
					<Button
						key={idx}
						page={idx + 1}
						handleUpdateCurrentPage={handleUpdateCurrentPage}
						currentPage={currentPage}
					/>
				))}
		</PageListContainer>
	);
};

export default PageList;

const PageListContainer = styled.div`
	text-align: center;
	margin: 3rem 0;
`;
