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

    currentLang = $('html').attr('lang');
    switchToLang = 'NA';
    if (currentLang === 'fr') {
      switchToLang = 'en';
    } else if (currentLang === 'en') {
      switchToLang = 'fr';
    }
  }

  connectedCallback() {
    var content = {
      home: {
        en: 'Home();',
        fr: 'Accueil();'
      },
      projects: {
        en: 'Projects();',
        fr: 'Projets();'
      },
      experience: {
        en: 'Experience();',
        fr: 'Expérience();'
      },
      education: {
        en: 'Education();',
        fr: 'Éducation();'
      },
      hobbies: {
        en: 'Hobbies();',
        fr: 'Loisirs();'
      },
      linkedin: {
        en: 'Connect with me!',
        fr: 'Connecter avec moi!'
      },
      github: {
        en: 'Check out my work!',
        fr: 'Voir mon travail!'
      },
      email: {
        en: 'Send me an email!',
        fr: 'Envoyer un courriel!'
      },
      cv: {
        en: 'Get my resume!',
        fr: 'Obtenir mon CV!'
      },
    }

    if (window.matchMedia('(max-width: 850px)').matches) {
      this.innerHTML = `
        <link rel="stylesheet" href="/css/header.css">
        <header>
          <div id="menu-title">menu(<div class="sliding-underline" onclick="switchLang()" id="lang">${currentLang}</div>)</div>
          <div id="opening-bracket">{</div>
          <nav class="menu-content">
            <a href="./">${content.home[currentLang]}</a>
            <a href="./projects.html">${content.projects[currentLang]}</a>
            <a href="./experience.html">${content.experience[currentLang]}</a>
            <a href="./education.html">${content.education[currentLang]}</a>
            <a href="./hobbies.html">${content.hobbies[currentLang]}</a>
            <div>
              <a href="https://www.linkedin.com/in/thibaut-baguette" target="_blank">
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
            menu(<div class="sliding-underline" onclick="switchLang()" id="lang">${currentLang}</div>) {
            <a class="sliding-underline" href="./">${content.home[currentLang]}</a>
            <a class="sliding-underline" href="./projects.html">${content.projects[currentLang]}</a>
            <a class="sliding-underline" href="./experience.html">${content.experience[currentLang]}</a>
            <a class="sliding-underline" href="./education.html">${content.education[currentLang]}</a>
            <a class="sliding-underline" href="./hobbies.html">${content.hobbies[currentLang]}</a>
            }
          </nav>
          <nav id="header-icons">
            <a class="sliding-underline" href="https://www.linkedin.com/in/thibaut-baguette" target="_blank" title="${content.linkedin[currentLang]}">
              <i class="fa-brands fa-linkedin-in"></i></a>
            <a class="sliding-underline" href="https://www.github.com/SpacewaIker" target="_blank" title="${content.github[currentLang]}">
              <i class="fa-brands fa-github"></i></a>
            <a class="sliding-underline" id="cv-icon" href="" target="_blank" title="${content.cv[currentLang]}">CV</a>
            <a class="sliding-underline" id="at-icon" href="mailto:${email}" title="${content.email[currentLang]}">@</a>
          </nav>
        </header>
      `;
    }
  }
}

customElements.define('header-component', Header);

var currentLang;
var switchToLang;

function switchLang() {
  var url = window.location.href;
  url = url.replace(currentLang, switchToLang);
  window.location.assign(url);
}

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
    // Large height screens
    var minLeft = 50;
    var minRight = 80;
  } else if (window.matchMedia("(min-height: 600px)").matches) {
    // medium height screens
    var minLeft = 80;
    var minRight = 110;
  } else {
    // small height screens
    var minLeft = 100;
    var minRight = 130;
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
  if (window.matchMedia('(max-width: 850px)').matches) {
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