class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `    
        <footer class="container">
            <div class="row">
                <p class="col-sm-4">&copy; 2025 Francisco Ramón Castro García</p>
                <div class="col-sm-2">
                <a href="http://blog.monchoplus.com/">Blog</a>
                </div>
                <div class="col-sm-2">
                <a href="https://github.com/framon98">Github</a>
                </div>
                <div class="col-sm-2">
                <a href="https://www.linkedin.com/in/frcastrog/">LinkedIn</a>
                </div>
                <!-- <div class="col-sm-2">
                <a href="https://tunein.com/podcasts/">Podcast</a>
                </div> -->
            </div>
        </footer>
    `;
    }
}

customElements.define('footer-component', Footer);