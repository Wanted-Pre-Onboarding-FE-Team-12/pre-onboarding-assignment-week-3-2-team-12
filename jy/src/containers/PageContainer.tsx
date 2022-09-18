import PageList from 'components/Button/PageList';

interface IProps {
	handleUpdateCurrentPage: (pageNum: number) => void;
}

const PageContainer = ({ handleUpdateCurrentPage }: IProps): JSX.Element => {
	return <PageList handleUpdateCurrentPage={handleUpdateCurrentPage} />;
};

export default PageContainer;
