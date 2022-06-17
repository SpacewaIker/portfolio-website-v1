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