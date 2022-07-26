class GoUp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="/css/go_up.css">
            <div id="go-up" onclick="scrollUp()">
                <i class="fa-solid fa-angles-up"></i>
            </div>
        `;
    }
}

customElements.define('go-up', GoUp);
window.addEventListener('scroll', checkVisibility);

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function checkVisibility() {
    if (window.scrollY > $(window).height()) {
        $('#go-up').addClass('visible');
    } else {
        $('#go-up').removeClass('visible');
    }
}