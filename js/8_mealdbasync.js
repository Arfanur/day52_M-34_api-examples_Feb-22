const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    if (searchText == '') {
        searchField.placeholder = 'Please Write Something to Display';
        hideNoResultFoundH1();
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // load data
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals));
        searchField.placeholder = 'Search the food you want';
    };
};

// show H1 ... No Result Found
function showNoResultFoundH1() {
    const noResultFoundH1 = document.getElementById('no-result-found');
    noResultFoundH1.innerText = 'No Result Found';
}
// hide H1 ... No Result Found
function hideNoResultFoundH1() {
    const noResultFoundH1 = document.getElementById('no-result-found');
    noResultFoundH1.innerText = '';
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // No result found
    if (meals == null) {
        showNoResultFoundH1();
    }
    else {
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
        // clear no Result Found H1
        hideNoResultFoundH1();
    }
};

const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
};

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetail = document.getElementById('meal-details');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        `;
    mealDetail.appendChild(div);
};