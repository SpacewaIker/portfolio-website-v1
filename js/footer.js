const email = 'thibaut.baguette@mail.mcgill.ca';

class Footer extends HTMLElement {
  constructor() {
    super();
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
            <li><a class="sliding-underline" href="/index.html">Home</a></li>
            <li><a class="sliding-underline" href="/index.html#intro-screen">About me</a></li>
            <li><a class="sliding-underline" href="/index.html#timeline-screen">Timeline</a></li>
            <li><a class="sliding-underline" href="/index.html#contact-screen">Contact</a></li>
          </ul>
        </div> 
        <div id="social-column" class="column">
          <h1>Social</h1>
          <p><a class="sliding-underline" href="mailto:${email}">Email<br/>${email}</a>
          </p>
          <ul>
            <li><a class="sliding-underline" href="https://www.github.com/SpacewaIker" target="_blank">Github</a></li>
            <li><a class="sliding-underline" href="https://www.linkedin.com/in/thibaut-baguette" target="_blank">LinkedIn</a></li>
            <li><a class="sliding-underline" href="" target="_blank">CV</a></li>
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