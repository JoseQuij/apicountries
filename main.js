const inputField = document.querySelector('.input');
const buttonSub = document.querySelector('.buttoninp');
const result = document.querySelector('.results');


buttonSub.addEventListener("click", () => {
    fetch(`https://restcountries.com/v3.1/name/${inputField.value}`)
    .then((res) => res.json()).then((data) => postCountries(data));
    inputField.value = ""
});

const postCountries = (data) => {
        data.forEach((country) => {
            console.log(country)
           const div = document.createElement('div');
            div.innerHTML = `
                <img src="${country.flags.svg}">
                <div>
                    <h2>${country.altSpellings[1]}</h2>
                    <h3>Continent:${country.continents}</h3>
                </div>`
            result.appendChild(div);
        });
    };
