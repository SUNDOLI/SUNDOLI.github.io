$(function () {
    const tl = gsap.timeline();
    tl
        .from('.main_visual h2', { x: 640, opacity: 0, delay: 1 })
        .from('.main_visual p', { x: 640, opacity: 0 })
        .from('.main_visual .me', { x: 640, opacity: 0, rotation: 360 })

    $('.wrapper').fullpage({
        anchors: ['intro', 'potfolio01', 'potfolio02', 'potfolio03', 'training', 'profile'],
        fixedElements: '.header, .footer',
        responsiveWidth: 1200,
        scrollOverflow: false,
        css3: false,

        onLeave: function (o, d, dr) {
            let idx = d.index;
            if (idx == 0) {
                tl.restart();
            }

            $('.header .side_nav li').removeClass('on')
            $('.header .side_nav li').eq(idx).addClass('on')


        },
        afterLoad: function (o, d, dr) {
            let idx = d.index;
            $('.section').removeClass('on')
            $('.section').eq(idx).addClass('on')

        }
    });
})

$(function () {

    $('.header .btn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .cover_lnk').toggleClass('on');
    });

    $('.header .cover_lnk a').on('click', function (e) {
        let idx = $(this).parent().index();
        $('.header .btn').removeClass('on');
        $('.header .cover_lnk').removeClass('on');
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });
    $('.header .side_nav li a').on('click', function (e) {
        let idx = $(this).parent().index();
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });

    $('.header .cover_lnk').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })
})