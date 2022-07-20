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
    this.innerHTML = `
      <link rel="stylesheet" href="/css/footer.css">
      <footer>
        <svg id="footer-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points="0 100, 100 10, 100 100"></polyline>
        </svg>
        <div id="website-column" class="column">
          <h1>Website Links</h1>
          <ul>
            <li><a class="sliding-underline" href="/html/index.html">Home</a></li>
            <li><a class="sliding-underline" href="/html/index.html#intro-screen">About me</a></li>
            <li><a class="sliding-underline" href="/html/index.html#timeline-screen">Timeline</a></li>
            <li><a class="sliding-underline" href="/html/index.html#contact-screen">Contact</a></li>
          </ul>
        </div> 
        <div id="social-column" class="column">
          <h1>Social</h1>
          <div id="copy-popup">Email Copied!</div>
          <p class="sliding-underline" onclick="copyEmail()" title="Copy my email!">
            Email<br/>${email}
          </p>
          <ul>
            <li><a class="sliding-underline" href="https://www.github.com/SpacewaIker" target="_blank" title="Check my work out!">Github</a></li>
            <li><a class="sliding-underline" href="https://www.linkedin.com/in/thibaut-baguette" target="_blank" title="Connect with me!">LinkedIn</a></li>
            <li><a class="sliding-underline" href="" target="_blank" title="Get my resume!">CV</a></li>
          </ul>
        </div>
        <div id="about-column" class="column">
          <h1>About</h1>
          <p>Website designed and built by<br/>Thibaut Baguette</p>
          <p><a class="sliding-underline" href="https://www.github.com/SpacewaIker/portfolio-website" target="_blank">
            Visit Website Repository
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