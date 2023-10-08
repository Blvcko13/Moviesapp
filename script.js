
"use strict";

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;
function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?").trim(),
      b = prompt("На сколько оцените его?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    document.write("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    document.write("Вы классический зритель");
  } else if (numberOfFilms >= 30) {
    document.write("Вы киноман");
  } else {
    document.write("Произошла ошибка");
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB();
