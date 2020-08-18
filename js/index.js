// AOS.init();
new WOW().init();

var myFullpage = new fullpage('#fullpage', {
    anchors: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    sectionsColor: ['#0098E1','#DFDCD1', '#DFDCD1', '#DFDCD1', '#DFDCD1', '#DFDCD1', '#DFDCD1', '#DFDCD1', '#DFDCD1', '#C20920', '#C20920'],
    // navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    scrollBar: true,
    responsiveWidth: 320
});



$('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.close').on('click', function(){
    $('.popup').removeClass('is-acted');
    $('input:text').val('');
    $('.message').val('');
});


