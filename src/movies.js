// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let eachDirectors = moviesArray.map((directores) => {
        return directores.director;
    });
    return eachDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function scoresAverage(moviesArray) {
    let averageScore = moviesArray.reduce((acc, elem) => {
        return acc + elem.score
    }, 0)
}
let averageTotal = averageScore / moviesArray.length
return averageTotal(average.toFixed(2))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const avMovie = moviesArray.reduce((acc, moviesAv,) => {
        return acc, moviesAv.score
    })
    const drama = moviesArray.filter((dramaMovie) => {
        return dramaMovie.genre.includes('Drama')
    });
    return drama;

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
