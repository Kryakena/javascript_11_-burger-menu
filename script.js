$(document).ready(function () { //нам нужно, чтобы при нажатиии на header_burger что-то происходило
    $('.header_burger').click(function (event){ //вешаем на класс .header_burger событие click
        $('.header_burger,.header_menu').toggleClass('active');
        //добавляем новый класс к меню и бургеру при нажатии, а потом убираем при повторном нажатии
        //можно увидеть в DevTools

        $('body').toggleClass('lock'); //при открытом меню блокируется контент + в style.css добавлен body в 1ый @media
    });
});