// FUNKCE NACITAJICI DATA Z LS //

const getSavedMovies = function(){
   const myMovies = localStorage.getItem("movies")

   if(myMovies !== null){
        return JSON.parse(myMovies)
   } else {
        return []
   }
}

// FUNKCE PRO POUZITI ODESLANI FORMULARE / UKLADA DO LS NAZEV FILMU //

const savedMovies = function(oneMovie){
    localStorage.setItem("movies", JSON.stringify(oneMovie))
}

// GENEROVANI HTML STRUKTURY POMOCI VYPIS //

const  generateHTMLstructure = function(oneMovie){
    const newDiv = document.createElement("div")
    const newLink = document.createElement("a")
    const button = document.createElement("button")

    // MAZACI TLACITKO //

    button.textContent = "Delete Movie"
    newDiv.appendChild(button)

    button.addEventListener("click", function(event){
        removeMovies(movies, oneMovie.id)
        savedMovies(movies)
        toListAgain()
    })

    newLink.textContent = oneMovie.firstMovie
    if(oneMovie.adult === true){
        newLink.classList.add("adult")
    } else {
        newLink.classList.add("no-adult")
    }

    newLink.setAttribute("href", `/edit.html#${oneMovie.id}`)

    newDiv.appendChild(newLink)

    return newDiv
}

// POLE ID NAJDEME INDEX DANEHO JMENA A POMOCI SLICE HO ODSTRANIME //

const removeMovies = function(ourMovies, id){
    const index = ourMovies.findIndex(function(nameWantToCheck){
        return nameWantToCheck.id === id
    })

    if(index > -1){
        ourMovies.splice(index,1)
    }
}

// POKUD SMAZEME JMENO Z LS, TAK TATO FUNKCE ZABEZPECI OPETOVNE VYPSANI LS(VYPSANI BEZ SMAZANEHO JMENA) //

const toListAgain = function(){
    document.querySelector(".list-names").innerHTML = ""

    let newMovies = getSavedMovies()

    newMovies.forEach(function(onlyOneMovie){
        const newContent = generateHTMLstructure(onlyOneMovie)
        document.querySelector(".list-names").appendChild(newContent)
    })
        
}
