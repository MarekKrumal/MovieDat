// NACTENI DATA Z LS DO CONST MOVIES, POKUD JE LS PRAZDNY, DO MOVIES SE ULOZI PRAZDNE POLE //

const movies = getSavedMovies()

// ODELSANI FORM A ULOZENI DO LS POMOCI MOVIES //

let myForm = document.querySelector("#test-form")
let myCheckBox = document.querySelector(".my-checkbox")

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    movies.push({
        id: uuidv4(),
        firstMovie: event.target.elements.firstMovie.value,
        adult: myCheckBox.checked
    })

    event.target.elements.firstMovie.value = ""
    myCheckBox.checked = false

    savedMovies(movies)
})

// VYPISOVANI ZPET DO STRANKY //

let buttonToList = document.querySelector(".to-list")
buttonToList.addEventListener("click", function(event){
    document.querySelector(".list-names").innerHTML = ""

    let moviesFromStorage = localStorage.getItem("movies")
    let moviesFromStorageJSON = JSON.parse(moviesFromStorage)

    moviesFromStorageJSON.forEach(function(oneMovie){
        const oneMovieHTML = generateHTMLstructure(oneMovie)
        document.querySelector(".list-names").appendChild(oneMovieHTML)
        
    })
})

window.addEventListener("storage", function(){
    this.location.reload()
})