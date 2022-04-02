/**
 * Main page with tags
 */

export class TagPage extends HTMLElement {
    constructor() {
        super();
        // get the current tag
        this.tag = window.history.state.url.slice(5);
    } 
    
    /**
     * Page template
     */

    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="flex flex-row flex-wrap max-w-screen-xl w-full lg:h-20 mx-auto mb-8">
                <fisheye-logo></fisheye-logo>
                <div class="p-2 text-center align-middle lg:order-2 order-3">
                    <tags-nav></tags-nav> 
                </div>
                <h1 class="text-xl md:text-3xl text-primary text-right flex-grow lg:order-3 order-2">
                    #`+ this.tag +`
                </h1>
            </div>
            <main id="content" class="max-w-screen-xl w-full mx-auto">
                <tagged-photographers></tagged-photographers>
            </main>
            
        `;
        this.appendChild(template.content);

        // Page title

        document.title = "#" + this.tag + " - Fisheye";
    }
}
