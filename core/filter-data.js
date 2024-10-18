export const filterData = (data, searchValue) => {
	if (!data) {
		return;
	}
	
	if (searchValue && searchValue.trim() === '') {
		return data;
	}
	return data.filter((el) => el?.title?.startsWith(searchValue));
}