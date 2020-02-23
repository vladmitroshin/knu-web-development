$(function () {

    let img = $('img');
    let fullName = $('p');
    let wrapper = $('.wrapper');
    img.hide();

    $('button').on('click', function () {

        img.show(1500, 'linear', function () {
            img.css('display', 'block');
            fullName.toggle(1500, function () {
                img.animate({ width: img.width() / 2 }, 1500, 'linear', function () {
                    wrapper.animate({ bottom: '0' }, 1500, 'linear', function () {
                        img.attr('src', '../img/lab8-2.jpg').fadeOut(1500);
                    });
                });
            });
        });
    });
    
});
