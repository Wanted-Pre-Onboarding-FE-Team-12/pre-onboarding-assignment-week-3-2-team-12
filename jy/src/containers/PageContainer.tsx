import PageList from 'components/Button/PageList';

interface IProps {
	handleUpdateCurrentPage: (pageNum: number) => void;
	currentPage: number;
}

const PageContainer = ({ handleUpdateCurrentPage, currentPage }: IProps): JSX.Element => {
	return <PageList handleUpdateCurrentPage={handleUpdateCurrentPage} currentPage={currentPage} />;
};

export default PageContainer;
