const input = document.querySelector('.input')
const button = document.querySelector('.buttoninp')
const resuts = document.querySelector('.results')

const picture = document.getElementById('picture')
const fileupload = document.getElementById('fileupload')


button.addEventListener('click' , () => {
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((res) => res.json()).then((data) => handlefunct(data))

    const handlefunct = (data) =>{
        data.forEach(element => {
            const div = document.createElement('div')
            div.innerHTML =`
            <img src=${element.flags.svg}>
            <div>
                <h1>${element.altSpellings[1]}</h1>
                <h2>${element.continents}</h2>
            </div>`
            resuts.appendChild(div)
        });
    }
})


fileupload.onchange = () => {
    picture.src = URL.createObjectURL(fileupload.files[0])
}