function backToTop() {
    let button = $('.sticky');
    $(window).on('scroll' , () => {
        if ($(this).scrollTop() >= 600) {
            button.fadeIn();
        } else {
            button.fadeOut()
        }
    });
    button.on("click" , (e) => {
        e.preventDefault();
        $('html').animate ( {scrollTop: 0}, 1000)
    })
}

backToTop();