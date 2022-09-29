// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(pelicula => {
        return pelicula.director;
    });
    return newArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray = moviesArray.filter((pelicula) => {
        if (pelicula.director == 'Steven Spielberg' && pelicula.genre.includes('Drama')) return true;
        return false;
    });
    return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == '') return 0;

    const scoreArray = moviesArray.map((movie) => {
        if (!movie.score) {
            movie.score = 0;
        }
        return movie.score;
    });

    const result = scoreArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });

    const average = result / scoreArray.length;

    return Number(average.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length == 1) return moviesArray[0].score;
    if (moviesArray == []) return 0;

    const newArray = moviesArray.filter((pelicula) =>
        pelicula.genre.includes('Drama')
    );


    const scoreArray = newArray.map((movie) => {
        if (!movie.score) {
            movie.score = 0;
        }
        return movie.score;
    });

    const result = scoreArray.reduce((previousValue, currentValue) =>
        previousValue + currentValue
    );

    const average = result / scoreArray.length;

    return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newArray = [...moviesArray];

    newArray.sort((despues, antes) => {

        if (despues.year > antes.year) return 1;
        if (despues.year < antes.year) return -1;
        if (antes.year == despues.year) {
            if (antes.title > despues.title) return -1;
        } else {
            return 1;
        }
        return 0;
    });
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newArray = [];
    for (let i = 0; i < moviesArray.length; i++) {
        const element = moviesArray[i].title;
        newArray.push(element);

    }
    newArray.sort((despues, antes) => {

        if (despues > antes) return 1;
        if (despues < antes) return -1;
        return 0;
    });
    return newArray.slice(0, 20);
}






