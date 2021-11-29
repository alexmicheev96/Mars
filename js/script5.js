/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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


    const   promo = document.querySelectorAll('.promo__adv img'),
            promoBg = document.querySelector('.promo__bg'),
            genre = promoBg.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            promoWrapper = document.querySelector('.promo__menu-list ul'),
            addForms = document.querySelector('form.add'),
            addInput = addForms.querySelector('.adding__input'),
            checkbox = addForms.querySelector('[type="checkbox"]');
            

    addForms.addEventListener('submit', (event) => {
        event.preventDefault();                // сбрасывает свойства браузера которые стоят по умолчанию

        let newFilm =  addInput.value.toUpperCase();       // что пользователь ввел что то в инпут
        const favorite = checkbox.checked;      // отмечена ли галочка это мой любимый фильм или нет,   значение будет будиновым

        if (newFilm) {                         //  выполняется тогда когда поле ввода инпут будет не пустая строка
            if (newFilm.length > 21) {                      // условие в котором проверется значение нашей переменной, с помощью интерполяции в в нашу переменную записываем новое значение используыя метод строй substring или substr это уже определять вам, не забываем const менять на let =)
                newFilm = `${newFilm.substr(0, 20)}...`
            }
            if(favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);      // добавляет новое значение в конец базы данных
            
            sortArray(movieDB.movies);         // сортирует базу данных в алфавитном порядке//

            createMovieList(movieDB.movies, movieList);
        }
         

        

        event.target.reset();    //// сбрасывает нашу форму   event.target обращается к самому элементу на котором происходит событие

    });

    const deletMarket = (market) => {
        market.forEach( item => {                      // калбэк ф-я которая переберает все элементы псевдомассива а затем их удаляет
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';              // обращается к элементу с определенным классом и заменяет его заченние

        promoBg.style.backgroundImage = 'url("img/bg.jpg")';      // то же самое но заменяет задний фон на хедере (грубо говоря)
    };

    const sortArray = (arr) => {
    arr.sort();                             // сортирует массив в алфавитном порядке
    };

    function createMovieList(films, parent) {              
        parent.innerHTML = '';                                // очищает все что находится в элементе ul
        sortArray(films);
        films.forEach((value, key) => {                 // калбек функция с помощью которой перебираются все элементы псевдомассива , это колбек функция встречается только у метода querySelectirAll первый аргумет это значение элемеента псевдомассива (например если 1: ПАПА   cледовательно значение это ПАПА), второй аргумент это ключ начинается с 0,1,2 и т.д.
            parent.innerHTML += `                                               
                <li class="promo__interactive-item">${key + 1} ${value}
                    <div class="delete"></div>          
                </li>
            `;                                                                              // присваивание со сложением, если не добавим данный оператор += то будет в массив добавляться только один элемент
        });

        // получаем все корзинки сразу в функции нам необходима 2 аргумента так как мы должны знать номер попорядку элемента который удаляем
        document.querySelectorAll('.delete').forEach ( (btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);     // метод slice удалет элемент массива, при этом он умеет 2 аргумента  i - тот элемент с которого нужно начать, второй аргумент количество элементов которых хочу удалить
                createMovieList(films, parent);      // по новой вызываем функцию в результате чего идет перерасчет массива это называется РЕКУРСИЯ

            });
        }); 
    }


makeChanges();                                  // вызовы всех функций
deletMarket(promo);
sortArray(movieDB.movies);
createMovieList(movieDB.movies, movieList);




