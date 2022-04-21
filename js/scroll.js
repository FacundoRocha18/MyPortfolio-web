document.addEventListener('DOMContentLoaded', function () {
    let header = document.getElementById('header');


    window.addEventListener('scroll', scroll);


    function scroll() {

        let scrollDistance = window.scrollY;

        if (scrollDistance >= 100) {
            header.classList.add('change-header-color');
        } else {
            header.classList.remove('change-header-color');
        }
    }
});