/**
 * Creation of cards in function of tags
 */
export class TaggedPhotographers extends HTMLElement {
    constructor() {
        super();
        // getting tag
        this.tag = window.history.state.url.slice(5);
        // filter photographers
        this.photographers = this.getTaggedPhotographers(this.tag);
    } 
    
    /**
     * Insertion of template, call render()
     */
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
            </div>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    /**
     * Adding every photographer that correspond to tag, display error if empty
     */
    render() {
        if(this.photographers.length > 0) {
            this.photographers.forEach(FeaturedUsers => {
                this.querySelector("div").insertAdjacentHTML('beforeend',
                "<photographer-card id=" + FeaturedUsers.id + "></photographer-card>");
            })
        } else {
            this.querySelector("div").insertAdjacentHTML('beforebegin',
                `<h3>Le tag #` + this.tag + ` ne correspond a aucun photographe 😔</h3>`);
                this.querySelector("div").insertAdjacentHTML('beforebegin',
                `<a href="/" class="button my-4 mx-auto">Revenir à l'accueil</a>`);
        }
    }

    /**
     * Return photographers filtered
     */
     getTaggedPhotographers(tag) {
        return data.photographers.filter(photographer => photographer.tags.includes(tag));
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
