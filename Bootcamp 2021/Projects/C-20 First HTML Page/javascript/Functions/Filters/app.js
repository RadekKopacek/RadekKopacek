const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every(score => score >= 75);
exams.some(score => score > 90);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n === 4;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1980
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2001
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1974
    },
    {
        title: 'Alien',
        score: 90,
        year: 1998
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: 'Waterwold',
        score: 62,
        year: 1995
    }
]

movies.some(movie => movie.year > 2000);
movies.every(movie => movie.year > 2000);

const goodMovies = movies.filter(m => m.score > 80);
const goodTitles = goodMovies.map(m => m.title);
//const badMovies = movies.filter(m => m.score < 70);
const badTitles = movies.filter(m => m.score < 70).map(m => m.title);
const recentMovies = movies.filter(m => m.year > 2000);