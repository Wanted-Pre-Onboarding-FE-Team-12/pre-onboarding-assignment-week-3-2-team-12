import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CommentListContainer from 'containers/CommentListContainer';
import FormContainer from 'containers/FormContainer';
import { getComments } from '_module/comment';
import Loading from 'components/Loading/Loading';
import PageContainer from 'containers/PageContainer';

const Main = (): JSX.Element => {
	const dispatch = useDispatch();
	/** comments data state */
	const [comments, setComments] = useState<IComment[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const commentData = async () => {
			try {
				setIsLoading(true);
				const result = dispatch(await getComments());
				if (result) {
					setComments(result.payload);
				}
			} catch (error) {
				alert(error);
			} finally {
				setIsLoading(false);
			}
		};

		commentData();
	}, []);

	if (isLoading) return <Loading />;

	return (
		<>
			{comments.length !== 0 && (
				<>
					<CommentListContainer />
					<PageContainer />
					<FormContainer />
				</>
			)}
		</>
	);
};

export default Main;
