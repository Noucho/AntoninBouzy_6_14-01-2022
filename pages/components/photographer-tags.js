/**
 * Gestion of tags
 */
export class PhotographerTags extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the photographer tags
        this.tags = this.getPhotographerTags(this.id);
    }
 
    /**
     * Inserting template, call render()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="py-2">
            </div>
        `;
        this.appendChild(template.content);
        this.render();
    }

    render() {
        this.tags.forEach(tag => {
            this.querySelector("div").insertAdjacentHTML('beforeEnd',
            `<a class="tag" href="/tag-` + tag + `">
                <span class="sr-only">`
                    + tag +
                `</span>
                #` + tag +`</a>`);
        });
        this.activeCurrent();
    }

    /**
     * Activate tag sorting
     */
    activeCurrent() {
        this.querySelectorAll(".tag").forEach(tag => {
            if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                tag.classList.add("current");
                tag.href = "/";
            }
        });
    }

    /**
     * Getting tags of the photographer from data
     */
     getPhotographerTags(id) {
        // return the photographer's tags, from the photographer whose ID match the requested ID
        return data.photographers.find(photographer => photographer.id == id).tags;
    }
}

// Import data from the JSON
import data from '../../assets/data/FishEyeDataFR.json'