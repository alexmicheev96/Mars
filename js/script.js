/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Братья из гримсби"
    ],
};


const promo = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      promoLink = promoWrapper.querySelectorAll('li'),
      promoGenre = promoBg.querySelector('.promo__descr'),
      addForm = document.querySelector('.add'),
      input = addForm.querySelector('input'),
      btn = addForm.querySelector('.promo__interactive .add button');


console.log(input);
promo.forEach( item => {
    item.remove();
});

promoLink.forEach(item => {
    item.remove();
});


genre.textContent = 'драма';
genre.style.color = "black";
promoGenre.textContent = 'история человека о том как он ел картошку';
promoBg.style.backgroundImage = 'url("img/bg.jpg")'; 

movieList.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});





