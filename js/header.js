class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.innerHTML = `
        <link rel="stylesheet" href="/css/header.css">
        <header>
          <div id="menu-title">menu</div>
          <div id="opening-bracket">{</div>
          <nav class="menu-content">
            <a href="/index.html">Home();</a>
            <a href="/html/projects.html">Projects();</a>
            <a href="/html/experience.html">Experience();</a>
            <a href="/html/education.html">Education();</a>
            <a href="/html/hobbies.html">Hobbies();</a>
            <div>
              <a href="https://www.linkedin.com/in/thibaut-baguette" target="_blank" title="test">
                <i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.github.com/SpacewaIker" target="_blank">
                <i class="fa-brands fa-github"></i></a>
              <a id="cv-icon" href="" target="_blank">CV</a>
            </div>
          </nav>
          <div id="closing-bracket">}</div>
          <div id="comment">//</div>
        </header>
      `;
    } else {
      this.innerHTML = `
        <link rel="stylesheet" href="/css/header.css">
        <header>
          <svg id="header-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <polyline id="header-poly" points="0 0, 1000 0, 1000 600, 0 100"></polyline>
          </svg>
          <nav id="page-links">
            menu() {
            <a class="sliding-underline" href="/index.html">Home();</a>
            <a class="sliding-underline" href="/html/projects.html">Projects();</a>
            <a class="sliding-underline" href="/html/experience.html">Experience();</a>
            <a class="sliding-underline" href="/html/education.html">Education();</a>
            <a class="sliding-underline" href="/html/hobbies.html">Hobbies();</a>
            }
          </nav>
          <nav id="header-icons">
            <a class="sliding-underline" href="https://www.linkedin.com/in/thibaut-baguette" target="_blank" title="Connect with me!">
              <i class="fa-brands fa-linkedin-in"></i></a>
            <a class="sliding-underline" href="https://www.github.com/SpacewaIker" target="_blank" title="Check my work out!">
              <i class="fa-brands fa-github"></i></a>
            <a class="sliding-underline" id="cv-icon" href="" target="_blank" title="Get my resume!">CV</a>
          </nav>
        </header>
      `;
    }
  }
}

customElements.define('header-component', Header);

function updateHeaderSize() {
  // scroll to this amount and the animation will be finished
  var endScroll = $(window).height();

  var poly = $('#header-poly');
  var scrollTop = window.pageYOffset;
  var scrollAmount = scrollTop < endScroll ? scrollTop : endScroll; 


  if (window.matchMedia("(min-height: 850px)").matches) {
    var minLeft = 50;
    var minRight = 80;
  } else {
    var minLeft = 70;
    var minRight = 100;
  }

  try {
    var maxLeft = $('header-component')[0].attributes.getNamedItem('left-size').value;
    var maxRight = $('header-component')[0].attributes.getNamedItem('right-size').value;
  } catch (e) {
    var maxLeft = 100;
    var maxRight = 600;
  }

  // change polyline points
  var left = maxLeft - (maxLeft - minLeft) * scrollAmount / endScroll;
  var right = maxRight - (maxRight - minRight) * scrollAmount / endScroll;
  poly.attr('points', `0 0, 1000 0, 1000 ${right}, 0 ${left}`);
}


$(function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('header').click(function () {
      $('header').toggleClass("open");
      $('#opening-bracket').toggleClass("open");
      $('#closing-bracket').toggleClass("open");
      $('.menu-content').toggleClass("open");
      $('#header-icons').toggleClass("open");
      $('#menu-title').toggleClass("open");
      $('#comment').toggleClass("open");
    });
    $('section').click(function () {
      $('header').removeClass("open");
      $('#opening-bracket').removeClass("open");
      $('#closing-bracket').removeClass("open");
      $('.menu-content').removeClass("open");
      $('#header-icons').removeClass("open");
      $('#menu-title').removeClass("open");
      $('#comment').removeClass("open");
    });
  } else {
    window.addEventListener('scroll', updateHeaderSize);
    updateHeaderSize();
  }
});