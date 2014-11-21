$(function () {

    $('.carousel').carouFredSel({
        width: 1039,
        items: 3,
        scroll: 1,
        auto: {
            duration: 2000,
            timeoutDuration: 1000
        },
        prev: '.prev',
        next: '.next',
        pagination: '.pager'
    });

});
