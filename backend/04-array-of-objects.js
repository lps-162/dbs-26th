
function Movie(id, name, director, artist) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.director = director; 
}

Movie.prototype.printMovie = function printMovie() {
    console.log("Name of movie : ", this.name)
}

const m1 = new Movie(1, "Thalapathy")
const m2 = new Movie(2, "Janatha Garage")
const listOfMovies = [m1, m2]

listOfMovies.forEach(m => m.printMovie())

const movies = [
    {
        id: 1,
        name: "Thalapathy",
        director: "Manirathnam",
        artist: "Rajinikanth, Mamooty"
    },
    {
        id: 2,
        name: "Jai Bhim",
        director: "TJ Gnanavel",
        artist: "Surya"
    },
    {
        id: 3,
        name: "Janatha Garage",
        director: "Kortala Shiva",
        artist: "NTR, Mohanlal"
    }
]

const movieNames = movies.map(m => m.name)
console.log(movieNames)
