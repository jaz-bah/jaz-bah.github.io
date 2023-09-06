$(window).scroll(() => {

    $('.nav_menu').removeClass('active_menu');
    $('#navMenuBtn').removeClass('active');

    $('.theme_box').removeClass('show_theme_box');
    $('.theme_icon').removeClass('ri-arrow-left-s-line');
    $('.theme_icon').addClass('ri-paint-brush-line');

    $('.music_box').removeClass('show_music_box');
    $('.music_icon').removeClass('ri-arrow-left-s-line');
    $('.music_icon').addClass('ri-music-2-fill');

    if(this.scrollY > 70){
        $('.section_navbar').addClass('position_fixed animate__fadeInDown');
    } else if (this.scrollY == 0) {
        $('.section_navbar').removeClass('position_fixed animate__fadeInDown');
    }

    if(this.scrollY > 1500){
        $('.back_to_top').addClass('back_to_top_show animate__animated animate__tada');
    } else if (this.scrollY < 1500) {
        $('.back_to_top').removeClass('back_to_top_show animate__animated animate__tada');
    }
})