const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
};
loadCountries();

const displayCountries = countries => {
    // for (const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    // console.log(countries);
    countries.forEach(country => {
        console.log(country);

        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        div.classList.add('country');

        h3.innerText = country.name.common;
        p.innerText = country.name.capital;

        div.appendChild(h3);
        div.appendChild(p);

        countriesDiv.appendChild(div);
    });
};