$('#navMenuBtn').click(()=>{
    $('.nav_menu').toggleClass('active_menu');
    $('.nav_menu .link1').toggleClass('animate__animated animate__flipInY').css({'animation-delay':'0s'});
    $('.nav_menu .link2').toggleClass('animate__animated animate__flipInY').css({'animation-delay':'0.1s'});
    $('.nav_menu .link3').toggleClass('animate__animated animate__flipInY').css({'animation-delay':'0.2s'});
    $('.nav_menu .link4').toggleClass('animate__animated animate__flipInY').css({'animation-delay':'0.3s'});
    $('.nav_menu .link5').toggleClass('animate__animated animate__flipInY').css({'animation-delay':'0.4s'});
});