
(function() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.scrollY >20){
            header.classList.add ("header_scroll");
        } else {
            header.classList.remove ("header_scroll")
        }
    }
}())
