
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    roundLengths: true,
    autoResize: true
});
// // Гамбургер
// $('.hamburger').on('click', function(){
//   $('.menu').toggleClass('open');
// });
// закрытие гамбургера после клика по ссылке
$('#responsive-menu>ul>li>a').click(function(){
  $('#responsive-menu').removeClass('in');
});
// // меню benefits
// $('.benefits-more').on('click', function(){
//   $('.benefits-block').toggleClass('benefits-open');
// });
// плавный скролл
$(document).ready(function(){


    $('a.anchor').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - $('.navbar').height();
        $('html,body').animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});
