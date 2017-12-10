///----------SCROLL-------------///
$(document).ready(function () {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("data-target").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 5000);
        return false;
    });
///----------END----------------///      

///----------SLIDER-------------///
    $('.slider').slick( {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 300,
        prevArrow:'<a class="arow left slider-prew"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>',
        nextArrow:'<a class="arow right slider-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
    });  
///----------END----------------///    

///--------MODAL WINDOW---------///
     $('.head__menu-btn').click (function (){
        $('#exampleModal').arcticmodal()
    })  
///----------END----------------///  

});    

