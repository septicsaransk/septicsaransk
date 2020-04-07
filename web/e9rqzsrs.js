// Слайдер Slick для модуля банеры одиночный
$('.bs__slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<div class="prev">',
    nextArrow: '<div class="next">',
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
}).slickAnimation();

// Плюс и минус для кол-во добавления товаров в корзину
$(document).ready(function () {
    $('.count_minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.count_plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// Функция для смены активного лайбла отложенных без перезагрзки страницы
$(document).on('click', ".shop-like", function (e) {
    let self = this;
    if ($(this).hasClass("active"))
        $(this).removeClass("active").removeClass("animate");
    else {
        $(this).addClass("animate");
        setTimeout(function () {
            $(self).addClass("active")
        }, 50);
    }
});

// Прижимаем footer к низу страницы
function changeFooterHeight() {
    let footer_height = $('footer').innerHeight();
    $('body').css("padding-bottom", footer_height);
}

changeFooterHeight();

$(window).resize(function () {
    /*меняем внутренний отступ снизу у <body> чтоб влез разожравшийся <footer>*/
    changeFooterHeight();
});

// Заменяем стандартный select
$(document).ready(function () {
    $('select').styler({
        idSuffix: '-styler',
        classSuffix: '-styler',
    });
});

// Модальное окно Вход
(function () {
    $('.md_st_open').click(function () {
        $('.fixed_mod_st').css({'display': 'block'});
        $('.mod_st_close').click(function () {
            $('.fixed_mod_st').css({'display': 'none'})
        });
        return false;
    })
}());

// $(window).scroll(function () {
//
//     var ControlDivTop = $('.header');
//
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 98) {
//             ControlDivTop.stop().animate({ 'top': ($(this).scrollTop() - 98) + "px" }, 100);
//         } else {
//             ControlDivTop.stop().animate({ 'top': ($(this).scrollTop()) + "px" },100);
//         }
//     });
// });


$(document).scroll(function () {
    if($(document).scrollTop() > 1 )
        $('.header').addClass('fixed');
    else
        $('.header').removeClass('fixed');
});

$(function(){
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({scrollTop: dn}, 1500);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});




function changeFooterHeight () {
    var footer_height = $('footer').innerHeight();
    $('body').css("padding-bottom", footer_height);
}
(function($){
    $(window).on("load",function(){

        changeFooterHeight ();
    });
})(jQuery);

var adpMenu;
var overMenu;
var menuButton = document.getElementById('adpMenuButton');
$(document).on('click', '#adpMenuButton, .overmenu, .btn_call', function () {
    menuButton.classList.toggle('is-active');
    $('.top-menu').toggleClass('is-active');
    // if(document.body.classList.contains('is-active')) {
    //     document.body.classList.remove('is-active');
    //     $('#adpMenuButton').insertBefore($('.logo_menu_wrap .top_menu'));
    // }
    // else {
    //     $(adpMenu).append($('#adpMenuButton'));
    //     document.body.classList.add('is-active');
    // }
});
// function creatAdpMenu() {
//     if (!document.querySelector('#adp_menu')) {
//         $('body').append('<div id="adp_menu"></div><div class="overmenu"></div>');
//         // добавляем эллементы
//         adpMenu = document.getElementById('adp_menu');
//         overMenu = document.querySelector('.overmenu');
//         addElementsInAdpMenu('#top-menu');
//     }
// }

function addElementsInAdpMenu() {
    for (var i = 0; i < arguments.length; i++) {
        $(adpMenu).append($(arguments[i]).clone());
    }
}
function removeElementsInAdpMenu() {
    for (var i = 0; i < arguments.length; i++) {
        $(arguments[i]).remove();
    }
}




// jQuery is required to run this code



