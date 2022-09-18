/**
 * 날짜 포맷 변경 (YYYY-MM-DD)
 * */
export const makeDateFormat = (): string => {
	const today = new Date();
	const year = today.getFullYear();
	const month = ('0' + `${today.getMonth() + 1}`).slice(-2);
	const day = ('0' + `${today.getDate()}`).slice(-2);

	const formattedDate = `${year}-${month}-${day}`;

	return formattedDate;
};
