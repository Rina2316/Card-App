import { getData } from "./core/get-data.js";
import { renderCards, emptyCount } from "./core/render-cards.js";
import { filterData } from "./core/filter-data.js";

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchBtn');
let isDisabled = true;
let initialData = []
let filteredData = [];


const url = new URL(window.location);
const initialSearch = url.searchParams.get('search');


const updateSearch = (isDisabled) => {
	const searchEl = document.getElementById('search');
	searchEl.disabled = isDisabled;
}

const fetchData = async () => {
	initialData = await getData();

	isDisabled = false;
	updateSearch(isDisabled);
	if (initialSearch && initialSearch?.trim() !== '') {
		filteredData = filterData(initialData, initialSearch);
		if (searchInput) {
			searchInput.setAttribute('value', initialSearch)
		}
	} else {
		filteredData = initialData;
	}

	renderCards(filteredData);
}
fetchData();





const updateURL = (event) => {
	if (!searchInput || !searchButton) {
		return;
	}
	const url = new URL(window.location);
	event.preventDefault();
	const searchValue = searchInput.value.trim();


	if (searchValue) {
		url.searchParams.set('search', searchValue);
		console.log('here');
		
		emptyCount();

	} else {
		url.searchParams.delete('search');
		emptyCount();
	}
	window.history.pushState({}, '', url);
	filteredData = filterData(initialData, searchValue);
	renderCards(filteredData);
};



searchButton.addEventListener('click', updateURL);

