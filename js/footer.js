/**
 * Define a footer to be used on all pages.
 * 
 * !! This element requires an 'email' const to be set.
 */
class Footer extends HTMLElement {
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
    var content = {
      website: {
        en: 'Website Links',
        fr: 'Liens du site'
      },
      home: {
        en: 'Home',
        fr: 'Accueil'
      },
      aboutme: {
        en: 'About me',
        fr: 'À propos de moi'
      },
      timeline: {
        en: 'Timeline',
        fr: 'Chronologie'
      },
      contact: {
        en: 'Contact',
        fr: 'Contact'
      },
      social: {
        en: 'Social',
        fr: 'Social'
      },
      popup: {
        en: 'Email Copied!',
        fr: 'Courriel copié!'
      },
      email: {
        en: 'Copy my email address!',
        fr: 'Copier mon adresse courriel!'
      },
      github: {
        en: 'Check out my work!',
        fr: 'Voir mon travail!'
      },
      linkedin: {
        en: 'Connect with me!',
        fr: 'Connecter avec moi!'
      },
      cv: {
        en: 'Get my resume!',
        fr: 'Obtenir mon CV!'
      },
      about: {
        en: 'About',
        fr: 'À propos'
      },
      credits: {
        en: 'Website designed and built by',
        fr: 'Site web conçu et construit par'
      },
      repo: {
        en: 'Visit Website Repository',
        fr: 'Visiter le dépôt du site web'
      },
    }

    this.innerHTML = `
      <link rel="stylesheet" href="/css/footer.css">
      <footer>
        <svg id="footer-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points="0 100, 100 10, 100 100"></polyline>
        </svg>
        <div id="website-column" class="column">
          <h1>${content.website[currentLang]}</h1>
          <ul>
            <li><a class="sliding-underline" href="/html/index.html">${content.home[currentLang]}</a></li>
            <li><a class="sliding-underline" href="/html/index.html#intro-screen">${content.aboutme[currentLang]}</a></li>
            <li><a class="sliding-underline" href="/html/index.html#timeline-screen">${content.timeline[currentLang]}</a></li>
            <li><a class="sliding-underline" href="/html/index.html#contact-screen">${content.contact[currentLang]}</a></li>
          </ul>
        </div> 
        <div id="social-column" class="column">
          <h1>${content.social[currentLang]}</h1>
          <div id="copy-popup">${content.popup[currentLang]}</div>
          <p class="sliding-underline" onclick="copyEmail()" title="${content.email[currentLang]}">
            Email<br/>${email}
          </p>
          <ul>
            <li><a class="sliding-underline" href="https://www.github.com/SpacewaIker" target="_blank" title="${content.github[currentLang]}">Github</a></li>
            <li><a class="sliding-underline" href="https://www.linkedin.com/in/thibaut-baguette" target="_blank" title="${content.linkedin[currentLang]}">LinkedIn</a></li>
            <li><a class="sliding-underline" href="/cv/test.pdf" target="_blank" title="${content.cv[currentLang]}">CV</a></li>
          </ul>
        </div>
        <div id="about-column" class="column">
          <h1>${content.about[currentLang]}</h1>
          <p>${content.credits[currentLang]}<br/>Thibaut Baguette</p>
          <p><a class="sliding-underline" href="https://www.github.com/SpacewaIker/portfolio-website" target="_blank">
            ${content.repo[currentLang]}
          </a></p>
        </div>
      </footer>
    `;
  }
}

function copyEmail() {
  var el = document.createElement('input');
  document.body.appendChild(el);
  el.value = email;
  el.select();
  document.execCommand('copy', false);
  el.remove();
  $('#copy-popup').fadeIn(300).delay(500).fadeOut(500);
}

customElements.define('footer-component', Footer);

/*

Website links       Social             About

Home                Email             Website designed
About               GitHub           and built by Thibaut
Timeline           LinkedIn            Baguette.
Contact             Resume          
Experience                           Visit website 
Education                              repository

        <svg id="footer-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points="0 30, 100 0, 100 100, 0 100"></polyline>
*/