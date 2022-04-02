/**
 * Presentation of photographer on his page
 */
export class PhotographerProfile extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer Data
        this.photographerData = this.getPhotographerData(this.id);
    }
 
    /**
     * Inserting template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <section class="bg-gray-100 rounded-md py-8 px-10 mt-10 flex">
                <div class="mr-6">
                    <h1 class="text-secondary text-6xl my-4">`
                        + this.photographerData.name +
                    `</h1>
                    <h2 class="text-font-2 text-2xl">`
                        + this.photographerData.city + `, ` + this.photographerData.country +
                    `</h2>
                    <p>`
                        + this.photographerData.tagline +
                    `</p>
                    <photographer-tags id="` + this.id +`"><photographers-tags>
                </div>
                <div class="mr-6 lg:relative lg:left-0 lg:ml-0 left-1/2 -ml-24 fixed bottom-0">
                    <a class="contactModal button my-4 mx-auto"
                        title="Contactez-moi">
                        Contactez-moi
                    </a>
                </div>
                <div class="flex-grow text-right">
                    <img class="h-48 w-48 rounded-full object-cover inline-block"
                    src="./images/portraits/` + this.photographerData.portrait + `"
                    alt=""` + this.photographerData.name + `></img>
                </div
            </section>
        `;
        this.appendChild(template.content);
    }

    /**
     * Getting photographer's data
     */
    getPhotographerData(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.photographers.find(photographer => photographer.id == id);
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'