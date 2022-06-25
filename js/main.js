
(function() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.scrollY >20){
            header.classList.add ("header_scroll");
        } else {
            header.classList.remove ("header_scroll")
        }
    };
}());
(function(){
    const burgerThumb = document.querySelector(".burger");
    const menu = document.querySelector(".header_nav");
    const burgerClose = document.querySelector(".burger_close");
    burgerThumb.addEventListener('click', () => {
        menu.classList.add("header_nav_active");
    });
    burgerClose.addEventListener('click', () => {
        menu.classList.remove("header_nav_active")
    });

}());