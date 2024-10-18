let selectedCardCount = 0


const updateSelectedCount = () => {
	const countElement = document.getElementById('count');
	countElement.textContent = selectedCardCount;
};
updateSelectedCount();

export const emptyCount = () => {
	selectedCardCount = 0;
	updateSelectedCount();
}

const createCardHTML = (title, body) => `
	<div class="card">
    	<h2 class="card__title">${title}</h2>
    	<p class="card__text">${body}</p>
    	<input type="checkbox" class="card__checkbox" />
  	</div>
`;

export const renderCards = (dataArray) => {
	const cardsContainer = document.getElementById('cards');
	cardsContainer.innerHTML = dataArray.map(({ title, body, checked }) =>
		createCardHTML(title, body, checked)
	).join('');

	const checkboxes = document.querySelectorAll('.card__checkbox');
	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener('change', handleCheckboxChange);
	});
};

const handleCheckboxChange = (event) => {
	const card = event.target.closest('.card');
	if (event.target.checked) {
		card.classList.add('card_active');
		selectedCardCount++;
		updateSelectedCount();
	} else {
		card.classList.remove('card_active');
		selectedCardCount--;
		updateSelectedCount();
	}
};

