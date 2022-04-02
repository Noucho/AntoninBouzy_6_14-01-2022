/**
 * Importing and presenting user informations
 */
export class PhotographerInfos extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer prince
        this.photographerPrice = this.getPhotographerPrice(this.id);
        // will registers the photographer's likes
        this.totalLikes = 0;
    }
 
    /**
     * Inserting template, call render(), listenSort(), listenNewLikes()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <aside class="bg-tertiary rounded-t-md hidden lg:block fixed bottom-0 right-48 p-4">
                <p class="text-black">
                    <span class="mr-8"></span>`
                        + this.photographerPrice + 
                `€ /jour</p>
            </section>
        `;
        this.appendChild(template.content);
        this.render();
        this.listenNewLikes();
        this.listenSort()
    }

    /**
     * Likes counting
     */
    render() {
        this.totalLikes = 0;
        document.querySelectorAll("article button").forEach(likeBtn => {
            this.totalLikes = this.totalLikes + parseInt(likeBtn.innerHTML.split(" ")[0]);
        })
        this.querySelector("aside span").innerHTML = this.totalLikes + " ❤️";
    }

    /**
     * New likes adding
     */
    listenNewLikes() {
        document.querySelectorAll("article button").forEach(likeBtn => {
            likeBtn.addEventListener('click', () => {
                this.totalLikes++;
                this.querySelector("aside span").innerHTML = this.totalLikes + " ❤️";
            })
        })
    }

    /**
     * Resorting media in function of new likes
     */
    listenSort() {
        document.getElementById("sortMedias").addEventListener('change', () => {
            this.render();
            this.listenNewLikes();
        })
    }

    /**
     * Importing photographer price
     */
    getPhotographerPrice(id) {
        // return the photographer's price in the JSON whose ID match the requested ID
        return data.photographers.find(photographer => photographer.id == id).price;
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'