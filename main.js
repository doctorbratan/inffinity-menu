const swipe = document.getElementById('swipe');
var scrollBollean = false;
swipe.style.display =  "none";

window.addEventListener('scroll', function() {
    
    if (window.scrollY >= 120) {
        scrollBollean = true
        swipe.style.display =  "none"
    }

})

window.onload = function() {
    setTimeout(() => {
        if (!scrollBollean) {
            swipe.style.display =  "block"
        }
    }, 10000);
}

function ScrollToMenu() {
    EPPZScrollTo.scrollVerticalToElementById('logo', 0)

}

const component = new Vue({
    el: '#main',
    data: { 
        menu: menu 
    }
})