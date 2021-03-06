/**
 * Tags navigation menu
 */
export class TagsNav extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Inserting template, activate current tag
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a class="tag" aria-labelledby="bouton tag portrait" href="/tag-portrait">
                <span class="sr-only">Portrait</span>
                #portrait
            </a>
            <a class="tag" aria-labelledby="bouton tag art" href="/tag-art">
                <span class="sr-only">Art</span>
                #art
            </a>
            <a class="tag" aria-labelledby="bouton tag fashion" href="/tag-fashion">
                <span class="sr-only">Fashion</span>
                #fashion
            </a>
            <a class="tag" aria-labelledby="bouton tag architecture" href="/tag-architecture">
                <span class="sr-only">Architectue</span>
                #architecture
            </a>
            <a class="tag" aria-labelledby="bouton tag travel" href="/tag-travel">
                <span class="sr-only">Travel</span>
                #travel
            </a>
            <a class="tag" aria-labelledby="bouton tag sport" href="/tag-sport">
                <span class="sr-only">Sport</span>
                #sport
            </a>
            <a class="tag" aria-labelledby="bouton tag animals" href="/tag-animals">
                <span class="sr-only">Animals</span>
                #animals
            </a>
            <a class="tag" aria-labelledby="bouton tag events" href="/tag-events">
                <span class="sr-only">Events</span>
                #events
            </a>
        `;
        this.appendChild(template.content);
        this.activeCurrent();
    }

    /**
     * activate current tag function
    */
         activeCurrent() {
            this.querySelectorAll(".tag").forEach(tag => {
                if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                    tag.classList.add("current");
                    tag.href = "/";
                }
            });
        }
}