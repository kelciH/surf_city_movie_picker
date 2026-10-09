const movies = [
    {
        name: "Home",
        year: 2015,
        genre: "Comedy",
        runTime: 1 + ":" + 34
    },
    {
        name: "Cars",
        year: 2006,
        genre: "Comedy",
        runTime: 1 + ":" + 56
    },
    {
        name: "Winter Soilder",
        year: 2014,
        genre: "Action",
        runTime: 2 + ":" + 16
    },
    {
        name: "Kpop Demon Hunters",
        year: 2025,
        genre: "Musical",
        runTime: 1 + ":" + 40
    },{
        name: "Interstellar",
        year: 2014,
        genre: "Adventure",
        runTime: 2 + ":" + 49
    },
    {
        name: "Soul Surfer",
        year: 2011,
        genre: "Drama",
        runTime: 1 + ":" + 46
    },{
        name: "Surfs Up",
        year: 2007,
        genre: "Comedy",
        runTime: 1 + ":" + 25
    },
    {
        name: "Cool Runnings",
        year: 1993,
        genre: "Adventure",
        runTime: 1 + ":" + 38
    },
    {
        name: "Hamilton",
        year: 2020,
        genre: "Musical",
        runTime: 2 + ":" + 59
    },
    {
        name: "Teen Beach Movie",
        year: 2013,
        genre: "Musical",
        runTime: 1 + ":" + 50
    },
    {
        name: "Finest Hours",
        year: 2016,
        genre: "Action",
        runTime: 1 + ":" + 57
    },
    {
        name: "Perfect Storm",
        year: 2000,
        genre: "Adventure",
        runTime: 2 + ":" + 10
    },
    {
        name: "The Blue Angels",
        year: 2024,
        genre: "Documentary",
        runTime: 46
    },
    {
        name: "How to Train Your Dragon",
        year: 2010,
        genre: "Adventure",
        runTime: 1 +":"+38
    },
    {
        name: "Treasure Planet",
        year: 2002,
        genre: "Adventure",
        runTime: 1 +":"+35
    }
]

const moviesContainer = document.querySelector(".movies");
const sortYear = document.getElementById("sortYear");
const sortTitle = document.getElementById("sortTitle");
const selectGenre = document.getElementById("genreSelect");
const pickMe = document.getElementById("pickMe");
const pickMeWords = document.querySelector(".pickmeWords");
const movieCount = document.getElementById("movieCount");
var moviesSorted = [];
var randIdx = 0

    console.log(moviesSorted);


sortTitle.addEventListener("click", ()=> {
    console.log("Title")

    moviesSorted = movies.sort((a,b)=> a.name.localeCompare(b.name));

    update(moviesSorted);

})

sortYear.addEventListener("click", ()=> {
    console.log("Year")

    moviesSorted = movies.sort((a,b)=> b.year - a.year);

    update(moviesSorted);

})

selectGenre.addEventListener("change", (e) =>{
    // currentGenre = selectGenre.value;

    // updateBooks();
    console.log(selectGenre.value)

    moviesSorted = movies.filter(movies => movies.genre === selectGenre.value);
    update(moviesSorted);

    if (selectGenre.value === "None") {
        update(movies);
    }

})

pickMe.addEventListener("click", ()=>{
    pickMeWords.innerHTML = "";

    console.log(moviesSorted);

    const words = document.createElement("div")
    
    if(moviesSorted.length === 0) {
        randIdx = Math.floor(Math.random() * movies.length);

        words.innerText = "Your watching: " + movies[randIdx].name 
    } else {
        randIdx = Math.floor(Math.random() * moviesSorted.length);

        words.innerText = "Your watching: " + moviesSorted[randIdx].name
    }
    
    pickMeWords.appendChild(words)
})

function update(list) {
    moviesContainer.innerHTML = ""

list.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const title = document.createElement("div");
    title.classList.add("movieTitle")
    title.innerText = movie.name

    const yearGenre = document.createElement("div");
    yearGenre.classList.add("movieYear")
    yearGenre.innerText = movie.year + "  |  " + movie.genre

    const runTime = document.createElement("div");
    runTime.classList.add("movieRunTime")
    runTime.innerText = movie.runTime + " mins"


    movieDiv.appendChild(title);
    movieDiv.appendChild(yearGenre);
    movieDiv.appendChild(runTime);


    moviesContainer.appendChild(movieDiv);

});

    if(moviesSorted.length === 0) {
        movieCount.innerText = "Showing " + movies.length + " of " + movies.length;
 
    } else {
        movieCount.innerText = "Showing " + moviesSorted.length + " of " + movies.length;
    }

}

update(movies);