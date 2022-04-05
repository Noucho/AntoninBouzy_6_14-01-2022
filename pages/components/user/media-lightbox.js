/**
 * Lightbox of medias
 */
export class MediaLightbox extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
    }
 
    /**
     * Inserting template, call short(), render(), listenSort()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="top-0 left-0 hidden fixed bg-white h-screen w-screen">
            <section class="lightbox flex"
                aria-label="Vue de l'image en grand">

                <div class="flex-grow flex flex-row-reverse">
                    <button class="previousMediaLightbox w-14 text-5xl text-bold text-primary" aria-label="Revenir à l'image précédente" title="Image précédente">
                        <
                    </button>
                </div>

                <div class="flex-shrink">
                    <lightbox-content></lightbox-content>
                    <p class="titleMediaLightbox text-primary text-xl my-2"></p>
                </div>

                <div class="flex-grow flex flex-row">
                    <button class="closeLightbox absolute w-14 text-bold text-5xl text-primary" aria-label="Fermer la vue aggrandie" title="Fermer la vue">
                        x
                    </button>
                    <button class="nextMediaLightbox w-14 text-5xl text-bold text-primary" aria-label="Aller à l'image suivante" title="Image suivante">
                        >
                    </button>
                </div>

            
            </section>
        </div>
        `;
        this.appendChild(template.content);
        this.listenOpenLightbox();
        this.listenCloseLightbox();
        this.listenSort()
    }

    /**
     *  Rendering
     */
    render() {
        this.querySelector("div").style.display = "block";
        document.querySelector("main").inert = true;
    }


    /**
     * Sorting medias
     */
    listenSort() {
        document.getElementById("sortMedias").addEventListener('change', () => {
            this.listenOpenLightbox();
        })
    }
    
    /**
     * Opening lightbox
     */
    listenOpenLightbox() {
        document.querySelectorAll("article img, article video").forEach(media => {
            media.addEventListener('click', () => {this.render()})
        })
        document.querySelectorAll("article img, article video").forEach(media => {
            media.addEventListener('keydown', event => {
                if(event.key === 'Enter') {
                    this.render()
                }
            })
        })
    }

    /**
     * Close lightbox
     */
    listenCloseLightbox() {
        this.querySelector(".closeLightbox").addEventListener('click', () => {
            this.querySelector("div").style.display = "none";
            document.querySelector("main").inert = false;
        })
        document.addEventListener('keydown', event => {
            if( event.key === 'Escape') {
                this.querySelector("div").style.display = "none";
                document.querySelector("main").inert = false;
            }
        })
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
