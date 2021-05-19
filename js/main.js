$(document).ready(function(){
    $('.all_slider').slick({

        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: true,
    });
});

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger, .nav-background .wrapper').toggleClass('active');
        //$('body').toggleClass('lock');
    });
});