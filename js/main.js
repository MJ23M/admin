function pageController(target) {
    $('[data-page-content]').css('display','none');
    $('[data-page-content="' + target + '"]').css('display','block');
}


$('[data-page]').click(function() {
    var target = $(this).attr('data-page');
    pageController(target,300);
})