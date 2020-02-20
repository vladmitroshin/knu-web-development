$(function () {
    let popup = $('#mypopup');

    $(document).dblclick(function (e) {
        popup.css({
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center'
        });
        let attrValue = e.target || e.srcElement;
        $('#valueOfAttr').text(attrValue.className);
    });

    $(window).click(function (e) {
        if (e.target == popup[0]) {
            popup.css({
                'display': 'none'
            });
        }
    });

    $('.run-btn').click(function () {
        let box = $('.box');
        box.animate({ marginLeft: -$(box).width() / 2, left: '50%' }, 1500)
            .animate({ fontSize: '1.8rem' }, 1500, 'linear', function () {
                box.css({
                    'color': 'yellow',
                    'width': '28rem'
                })
                    .animate({ marginLeft: -$(box).width(), left: '100%' }, 1500)
                    .animate({ fontSize: '2.2rem' }, 1500);
            });
    });

    $('#enter-word').on('click', function () {
        $('.control-word').toggleClass('active');
    });
});