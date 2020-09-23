//дожидаемся полной загрузки страницы
window.onload = function () {

    // начало скрипта бургер-меню
    var hamburger = document.querySelector("#main > div.hamburger.main_flex_column.flex__jcontent_between");

    var nav = document.querySelector("body > header > div.navigation");

    var logo = document.querySelector("body > header > div.navigation > nav > div");

    var whiteFill = document.querySelector("#white_fill");

    hamburger.addEventListener('click', function () {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            whiteFill.style.display = 'none';
            hamburger.classList.remove('other');
            hamburger.classList.remove('rotation');
            logo.classList.remove('other2');
            // hamburger.classList.remove('rotation');
            // logo.style.marginLeft = 'calc(50% - 70px)';
        } else {
            nav.style.display = 'block';
            whiteFill.style.display = 'block';
            hamburger.classList.add('other');
            hamburger.classList.add('rotation');
            logo.classList.add('other2');

            // hamburger.classList.add('rotation');
            // logo.style.marginLeft = '30px';
        }
    });

    whiteFill.addEventListener('click', function () {
        nav.style.display = 'none';
        whiteFill.style.display = 'none';
        hamburger.classList.remove('other');
        hamburger.classList.remove('rotation');
        logo.classList.remove('other2');
    });
    // конец скрипта открытия/закрытия бургер-меню

    // начало скрипта формы регистрации

    var buttonForm = document.querySelector("#contakt > button");
    var modalBox = document.querySelector("#modal_box");
    var blackFill = document.querySelector("#black_fill");
    var closeD = document.querySelector("#close_modal");

    buttonForm.addEventListener('click', function () {
        modalBox.style.display = 'block';
        blackFill.style.display = 'block';
    });

    closeD.addEventListener('click', function () {
        modalBox.style.display = 'none';
        blackFill.style.display = 'none';
    });

    // конец скрипта формы регистрации


    // скрипт врещения изображений блока rules при прокрутке 

    var pullUp = document.querySelector("#rules > div.pullUp.main_flex__nowrap.flex__jcontent_between.flex__align-items_center > img");
    var bruss = document.querySelector("#rules > div:nth-child(6) > img");
    var burpee = document.querySelector("#rules > div.burpee.main_flex__nowrap.flex__jcontent_between.flex__align-items_center > img");

    var scrollTop = window.pageYOffset;
    window.onscroll = function () {
        var scrollTop = window.pageYOffset;
        if (scrollTop >= 1290 && scrollTop < 1450) {
            pullUp.classList.add('effekt');
            bruss.classList.remove('effekt');
            burpee.classList.remove('effekt');
        }
        if (scrollTop >= 1450 && scrollTop < 1600) {
            pullUp.classList.remove('effekt');
            bruss.classList.add('effekt');
            burpee.classList.remove('effekt');
        }
        if (scrollTop >= 1600 && scrollTop < 1900) {
            pullUp.classList.remove('effekt');
            bruss.classList.remove('effekt');
            burpee.classList.add('effekt');
        }
        if (scrollTop > 1290 && scrollTop > 1900) {
            pullUp.classList.remove('effekt');
            bruss.classList.remove('effekt');
            burpee.classList.remove('effekt');
        }
    }
    // конец скрипта врещения изображений блока rules при прокрутке 


    var STRV = document.querySelector("#contakt > div:nth-child(5) > img");

    //вешаем события при наведении на кнопку регистрации 
    buttonForm.onmouseout = function (e) {
        STRV.classList.add('strelka');
    }
    buttonForm.onmouseover = function (e) {
        STRV.classList.remove('strelka');
    };

    var phoneNumber = document.querySelector("#contakt > div.main_flex.flex__align-content_center.flex__jcontent_center > a");
    var phone = document.querySelector("#contakt > div.main_flex.flex__align-content_center.flex__jcontent_center > img");

    //вешаем события при наведении на кнопку регистрации 
    phoneNumber.onmouseout = function (e) {
        phone.classList.remove('rotation2');
        phone.style.transition = '1s .5s';
    }
    phoneNumber.onmouseover = function (e) {
        phone.classList.add('rotation2');
    };

}

// Начало Таймера отсчёта
"use strict";
document.addEventListener('DOMContentLoaded', function () {
    if ('NodeList' in window && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    /**
     * Класс создает динамический таймер, который берет из дата атрибута
     * Для точного подсчета времени в секундах нужно указать вот такой формат
     * August 15 2020 12:50:00 GMT+03:00
     * В остальном подойдет любой формат которые понимает Date.parse()
     */
    var Timer = /** @class */ (function () {
        function Timer(element) {
            this.el = element;
            this.total;
            this.init();
        }
        /**
         * Метод для запуска функции
         * Тут идет проверка на наличие элемента и на наличие у него дата атрибута
         * Если их нет, то функция завершается
         */
        Timer.prototype.init = function () {
            var _this = this;
            if (!this.el) {
                return;
            }
            if (this.el instanceof HTMLElement) {
                var deadline_1 = this.el.dataset.deadline;
                if (!deadline_1) {
                    return;
                }
                var intervalId_1 = setInterval(function () {
                    _this.calculateTime(deadline_1);
                    if (_this.total <= 0) {
                        clearInterval(intervalId_1);
                        _this.destroy();
                    }
                }, 1000);
            }
        };
        /**
         * Функция запускает 2 других функции, в которых идет расчет времени, а после него
         * рендер данных на страницу
         * @param {string} deadline - данные из data-атрибута
         */
        Timer.prototype.calculateTime = function (deadline) {
            var time = this.getTimeRemaining(deadline);
            this.render(this.createString(time));
        };
        /**
         * Метод создает объект и возвращает его.
         * Объект содержит в себе данные общего кол-ва времени, а так же отдельно считаются секунды,
         * часы, минуты и дни.
         * @param {string} deadline
         */
        Timer.prototype.getTimeRemaining = function (deadline) {
            var currentDay = new Date();
            var t = Date.parse(deadline) - Date.parse(currentDay.toString());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            this.total = t;
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
            };
        };
        /**
         * Метод принимает объект с данными, в которых хранится кол-во дней, часов, минут, секунд
         * Внутри создается html и возвращается в виде строки
         * @param data
         */
        Timer.prototype.createString = function (data) {
            var sec = data.seconds === 1 ? 'секунда' : data.seconds >= 2 && data.seconds <= 4 ? 'секунды' : 'секунд';
            var min = data.minutes === 1 ? 'минута' : data.minutes >= 2 && data.minutes <= 4 ? 'минуты' : 'минут';
            var hour = data.hours === 1 ? 'час' : data.hours >= 2 && data.hours <= 4 ? 'часа' : 'часов';
            var day = data.days <= 20
                ? countDays(data.days)
                : (data.days > 20 && data.days <= 99)
                    ? countDays(data.days % 10)
                    : countDays(data.days % 100);
            /**
             * Функция принимает кол-во дней и в зависимости от их кол-ва выбирает правильный вариант
             * @param {number} days оставшееся  кол-во дней
             */
            function countDays(days) {
                return days === 1 ? 'день' : (days >= 2 && days <= 4) ? 'дня' : 'дней';
            }
            return "\n        <div class='timer-body'>\n            <div class='timer-body__title'>До мероприятия осталось</div>\n            <div class='timer-body__time'>\n                <span class='timer-body__number'>" + data.days + "</span> " + day + "\n                <span class='timer-body__number'>" + data.hours + "</span> " + hour + "\n                <span class='timer-body__number'>" + data.minutes + "</span> " + min + "\n                <span class='timer-body__number'>" + data.seconds + "</span> " + sec + "\n            </div>\n        </div>\n      ";
        };
        /**
         * Принимает готовую строку в формате html, чтобы вставить её на страницу
         * @param {string} data
         */
        Timer.prototype.render = function (data) {
            this.el.innerHTML = data;
        };
        /**
         * Метод срабатывает, когда таймер заканчивает свою работу.
         * Метод удаляет таймер
         */
        Timer.prototype.destroy = function () {
            var _a;
            (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.el);
        };
        return Timer;
    }());
    var allTimer = document.querySelectorAll('.js-timer');
    allTimer.forEach(function (timer) { return new Timer(timer); });
});
// Конец Таймера отсчёта