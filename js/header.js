class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="/css/header.css">
      <header>
        <div id="header-bg"></div>
        <nav id="page-links">
          <a href="/index.html">menu() { Home();</a>
          <a href="/html/projects.html">Projects();</a>
          <a href="/html/experience.html">Experience();</a>
          <a href="/html/education.html">Education();</a>
          <a href="/html/hobbies.html">Hobbies(); }</a>
        </nav>
        <nav id="header-icons">
          <a href="https://www.linkedin.com/in/thibaut-baguette" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.github.com/SpacewaIker" target="_blank">
            <i class="fa-brands fa-github"></i></a>
          <a id="cv-icon" href="" target="_blank">CV</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

function updateHeaderSize() {
  // scroll to this amount and the animation will be finished
  var endScroll = $(window).height();

  var header = $('#header-bg');
  var scrollTop = window.pageYOffset;
  var scrollAmount = scrollTop < endScroll ? scrollTop : endScroll; 

  var maxRotation = 20; // 20 deg
  var minRotation = 1.5; // 1.5 deg

  var minTop = -0.3 * $(window).height(); // 30 vh
  // var maxTop = -0.74 * $(window).height(); // 74 vh
  var maxTop = 70 -0.8 * $(window).height(); // 80 vh

  // change header rotation
  var headerRotation = maxRotation - (maxRotation - minRotation) * (scrollAmount / endScroll);
  header.css('transform', 'rotate(' + headerRotation + 'deg)');

  // change header position
  var headerTop = minTop + (maxTop - minTop) * (scrollAmount / endScroll);
  header.css('top', headerTop + 'px');
}

window.addEventListener('scroll', updateHeaderSize);

$(function () {
  updateHeaderSize();
});