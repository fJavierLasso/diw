document.addEventListener('DOMContentLoaded', function () {

    new Splide( '.splide',
    {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        pagination: false,
        arrows: false,
        perPage: 4,
        autoScroll: {
            speed: 1,
        },
        breakpoints: {
            800: {
                perPage: 2,
                autoWidth: true,
                // autoHeight: true,
                gap: 10,

            },
            500: {
                gap: 5,
            },
    }}
    ).mount( window.splide.Extensions );
});