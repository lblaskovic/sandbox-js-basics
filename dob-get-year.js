const yearsAroundTheSun = (dateOfBirth) => {
	const date = new Date(dateOfBirth);
	const year = date.getFullYear();
	return year;
}

yearsAroundTheSun(03/23/1989);
