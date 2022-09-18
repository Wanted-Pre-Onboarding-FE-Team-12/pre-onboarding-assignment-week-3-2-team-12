import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPageNationComments } from '_module/comment';
import CommentListContainer from 'containers/CommentListContainer';
import FormContainer from 'containers/FormContainer';
import Loading from 'components/Loading/Loading';
import PageContainer from 'containers/PageContainer';

const Main = (): JSX.Element => {
	const dispatch = useDispatch();
	/** comments data state */
	const [comments, setComments] = useState<IComment[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	/** currentPage state */
	const [currentPage, setCurrentPage] = useState<number>(1);
	/** currentPage 변경 함수 */
	const handleUpdateCurrentPage = (page: number) => {
		setCurrentPage(page);
	};

	const initializationPage = () => {
		setCurrentPage(1);
	};

	useEffect(() => {
		const getCommentData = async () => {
			try {
				setIsLoading(true);
				/** 기존 전체 comments 요청 함수 */
				/* const result = dispatch(await getComments());
				if (result) {
					setComments(result.payload);
				} */
				const pageResult = dispatch(
					await getPageNationComments({
						page: currentPage,
						limitComments: 5,
						orderType: 'desc',
						sortType: 'id',
					})
				);
				setComments(pageResult.payload);
			} catch (error) {
				alert(error);
			} finally {
				setIsLoading(false);
			}
		};
		getCommentData();
	}, [currentPage]);

	if (isLoading) return <Loading />;

	return (
		<>
			{comments.length !== 0 && (
				<>
					<CommentListContainer initializationPage={initializationPage} />
					<PageContainer
						handleUpdateCurrentPage={handleUpdateCurrentPage}
						currentPage={currentPage}
					/>
					<FormContainer initializationPage={initializationPage} />
				</>
			)}
		</>
	);
};

export default Main;
