let movieID = location.hash.substring(1)
let movies = getSavedMovies()

let searchedMovie = movies.find(function(oneObject){
    return oneObject.id === movieID
})

if(searchedMovie === undefined){
    location.assign("/index.html")
}

document.querySelector("#editedMovie").value = searchedMovie.firstMovie

let changingForm = document.querySelector("#changing-form")
changingForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    console.log(event.target.elements.changingMovie.value)

    searchedMovie.firstMovie = event.target.elements.changingMovie.value

    savedMovies(movies)
})

window.addEventListener("storage", function(event){
    console.log("něco se změnilo")

    if(event.key === "movies"){
        movies = JSON.parse(event.newValue)
    }

    let searchedMovie = movies.find(function(oneObject){
        return oneObject.id === movieID
    })
    
    if(searchedMovie === undefined){
        location.assign("/index.html")
    }
    
    document.querySelector("#editedMovie").value = searchedMovie.firstMovie
})