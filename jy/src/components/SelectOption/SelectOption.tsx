import React from 'react';

interface IProps {
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	value: string;
}

const SelectOption = ({ onChange, value }: IProps): JSX.Element => {
	return (
		<select name="profile_url" id="profile-img-select" required onChange={onChange} value={value}>
			<option value="">프로필 이미지를 선택해주세요.</option>
			<option value="https://picsum.photos/id/40/50/50">cat</option>
			<option value="https://picsum.photos/id/60/50/50">desk</option>
			<option value="https://picsum.photos/id/401/50/50">balloon</option>
			<option value="https://picsum.photos/id/405/50/50">street</option>
			<option value="https://picsum.photos/id/900/50/50">beach bridge</option>
			<option value="https://picsum.photos/id/340/50/50">forest</option>
			<option value="https://picsum.photos/id/250/50/200">camera</option>
			<option value="https://picsum.photos/id/357/50/50">clock</option>
			<option value="https://picsum.photos/id/599/50/50">mountain</option>
			<option value="https://picsum.photos/id/278/50/50">tunnel</option>
			<option value={value}>{value}</option>
		</select>
	);
};

export default SelectOption;
