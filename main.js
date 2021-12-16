let selected_language = "ru";
const candidate = localStorage.getItem('language');
if (candidate) {
    selected_language = candidate
} 

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
        menu: menu,
        language: selected_language
    }
})

function language(data) {

    localStorage.setItem('language', data)
    selected_language = data
    component.language = selected_language

    if (data == "ru") {
        menu.cost = "ЛЕЙ"
    }

    if (data == "en") {
        menu.cost = "MD"
    }

    if (data == "md") {
        menu.cost = "LEI"
    }

}

language(selected_language);