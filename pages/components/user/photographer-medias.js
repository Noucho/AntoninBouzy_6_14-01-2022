/**
 * Display medias of the photographer
 */
export class PhotographerMedias extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer medias
        this.medias = this.getMedias(this.id);
    }
 
    /**
     * Inserting template, call short(), render(), listenSort
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <section class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">

        </section>
        `;
        this.appendChild(template.content);
        this.sort("date");
        this.render();
        this.listenSort();
    }

    /**
     *  Clear section
     */
    render() {
        this.querySelector("section").innerHTML = "";
        this.medias.forEach(media => {
            this.querySelector("section").insertAdjacentHTML('beforeEnd', 
            '<media-card id="num' + media.id + '"></media-card>');
        });
    }

    /**
     * Sorting medias
     */
    sort(value) {
        switch (value) {
            case "date":
                this.medias.sort((m1, m2) => {
                    let d1 = new Date(m1.date);
                    let d2 = new Date(m2.date);
                    return d2 - d1;
                })
                break;
        
            case "likes":
                this.medias.sort((m1, m2) => m2.likes - m1.likes);
                break;
        
            case "title":
                this.medias.sort((m1, m2) => m1.title.toLowerCase().localeCompare(m2.title.toLowerCase()));
                break;
        
            default:
                console.error("Erreur 3");
                break;
        }
    }

    /**
     * Resorting elements
     */
     listenSort() {
        document.getElementById("sortMedias").addEventListener('change', select => {
            this.sort(select.target.value)
            this.render();
        })
    }

    /**
     * Importing medias from the photographer's data
     */
    getMedias(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.media.filter(media => media.photographerId == id);
    }

}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
