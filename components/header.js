class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header class="container">
            <div class="row">
                <h1 class="col-sm-6"><a href="index.html">Francisco R Castro G</a></h1>
                <nav class="col-sm-6 text-right">
                <a href="about.html">About Me</a>
                <a href="education.html">Education</a>
                <a href="experience.html">Experience</a>
                </nav>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);