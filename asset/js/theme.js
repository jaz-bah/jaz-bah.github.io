$('.theme_btn').click(() => {
    $('.music_box').removeClass('show_music_box');
    $('.music_icon').removeClass('ri-arrow-left-s-line');
    $('.music_icon').addClass('ri-music-2-fill');

    $('.theme_box').toggleClass('show_theme_box');
    $('.theme_icon').toggleClass('ri-paint-brush-line ri-arrow-left-s-line');
})

$('.dark_mode').click(() => {
    $('#body').removeClass('light_mode');
    $('#body').addClass('dark_mode');
})

$('.light_mode').click(() => {
    $('#body').removeClass('dark_mode');
    $('#body').addClass('light_mode');
})

$('.theme1').click(() => {
    $('#body').removeClass('color_blue');
    $('#body').removeClass('color_violet');
    $('#body').removeClass('color_yellow');
    $('#body').removeClass('color_red');

    $('#body').addClass('color_orange');
    $('#profileImage').attr('src','asset/image/profile-orange.png');
    $('#logoImage').attr('src','asset/image/logo-orange.png');
})

$('.theme2').click(() => {
    $('#body').removeClass('color_orange');
    $('#body').removeClass('color_violet');
    $('#body').removeClass('color_yellow');
    $('#body').removeClass('color_red');

    $('#body').addClass('color_blue');
    $('#profileImage').attr('src','asset/image/profile-blue.png');
    $('#logoImage').attr('src','asset/image/logo-blue.png');
})

$('.theme3').click(() => {
    $('#body').removeClass('color_orange');
    $('#body').removeClass('color_blue');
    $('#body').removeClass('color_yellow');
    $('#body').removeClass('color_red');

    $('#body').addClass('color_violet');
    $('#profileImage').attr('src','asset/image/profile-violet.png');
    $('#logoImage').attr('src','asset/image/logo-violet.png');
})

$('.theme4').click(() => {
    $('#body').removeClass('color_orange');
    $('#body').removeClass('color_blue');
    $('#body').removeClass('color_violet');
    $('#body').removeClass('color_red');

    $('#body').addClass('color_yellow');
    $('#profileImage').attr('src','asset/image/profile-yellow.png');
    $('#logoImage').attr('src','asset/image/logo-yellow.png');
})

$('.theme5').click(() => {
    $('#body').removeClass('color_orange');
    $('#body').removeClass('color_blue');
    $('#body').removeClass('color_violet');
    $('#body').removeClass('color_yellow');

    $('#body').addClass('color_red');
    $('#profileImage').attr('src','asset/image/profile-red.png');
    $('#logoImage').attr('src','asset/image/logo-red.png');
})



$('.music_btn').click(() => {
    $('.theme_box').removeClass('show_theme_box');
    $('.theme_icon').removeClass('ri-arrow-left-s-line');
    $('.theme_icon').addClass('ri-paint-brush-line');
    
    $('.music_box').toggleClass('show_music_box');
    $('.music_icon').toggleClass('ri-music-2-fill ri-arrow-left-s-line');
})


let loader = document.getElementById('loder');

window.addEventListener("load", function (){
    loader.style.display = "none";
})