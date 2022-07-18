/**
 * Define a header to be used on all pages.
 * 
 * !! This element requires an 'email' const to be set.
 */
class Header extends HTMLElement {
  constructor() {
    super();

    try {
      email;
    } catch (e) {
      console.error('Footer email const is not set!');
      var email = '';
    }
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
              <a id="at-icon" href="mailto:${email}">@</a>
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
            <a class="sliding-underline" id="at-icon" href="mailto:${email}" title="Send me an email!">@</a>
          </nav>
        </header>
      `;
    }
  }
}

customElements.define('header-component', Header);

/**
 * Animation for the header SVG background.
 */
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

  // get the left-size and right-size tags from the html
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
  // on mobile, toggle the menu when the user clicks on the menu icon
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
  }
  // on desktop, use the function defined above
  else {
    window.addEventListener('scroll', updateHeaderSize);
    updateHeaderSize();
  }
});