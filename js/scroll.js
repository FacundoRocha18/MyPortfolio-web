document.addEventListener('DOMContentLoaded', function() {
    var $header = document.getElementById('header');
var $previousScroll = 0;


window.addEventListener('scroll', scroll);


function scroll() {
    var $scrollDistance = $(this).scrollTop();
    
    if ($scrollDistance >= 150) {
        $header.classList.add('change-header-color');
    } else {
        $header.classList.remove('change-header-color');
    }
    $previousScroll = $scrollDistance;
}
});