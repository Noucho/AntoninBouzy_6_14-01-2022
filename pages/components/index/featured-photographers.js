/**
 * photographer card creation component
 * to put them on main page
 */
export class FeaturedPhotographers extends HTMLElement {
    constructor() {
        super();
        // importing photographers from data
        this.photographers = data.photographers;
    } 
    
    /**
     * Insertion of empty template, then call render()
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
     * addig template for each photographer
     */
    render() {
        this.photographers.forEach(FeaturedUsers => {
            this.querySelector("div").insertAdjacentHTML('beforeend',
            "<photographer-card id=" + FeaturedUsers.id + "></photographer-card>");
        })
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
