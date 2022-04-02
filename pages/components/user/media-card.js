/**
 * Displaying photographers media */
export class MediaCard extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the media Data
        this.mediaData = this.getMediaData(this.id.slice(3));
        // get the photographer name from media ID
        this.photographerName = this.getPhotographerName(this.mediaData);
        // 
        this.likes = this.mediaData.likes;
    }
 
    /**
     * Inserting template, call render(), listenSort()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <article>
                <div class="flex gap py-2">
                    <p class="text-primary text-xl flex-grow">` + this.mediaData.title + `</p>
                    <button class="text-primary text-xl text-right"
                        aria-label="likes">`
                         + this.likes + 
                    ` ❤️</button>
                </div>
            </article>
        `;
        this.appendChild(template.content);
        this.render();
        this.likeButton();
    }

    /**
     * Display in function fo type of media (image, video)
     */
    render() {
        if(this.mediaData.image) {
            this.querySelector("article").insertAdjacentHTML('afterbegin', 
            `<img class="h-80 w-full object-cover rounded-md cursor-pointer" 
                alt="` + this.mediaData.title + `" 
                src="./images/` + this.photographerName.split(' ')[0] + `/` + this.mediaData.image.slice(0, -4) + `-min.jpg" 
                id=` + this.mediaData.id + ` tabindex="0">`);
        }else if(this.mediaData.video) {
            this.querySelector("article").insertAdjacentHTML('afterbegin', 
            `<video class="h-80 w-full object-cover rounded-md none cursor-pointer"
                title="` + this.mediaData.title +`"
                id="` + this.mediaData.id + `"
                tabindex="0"><source alt="` + this.mediaData.title + `" 
                src="./images/` + this.photographerName.split(' ')[0] + `/` + this.mediaData.video + `" 
                type="video/mp4"></video>`);
        }
    }

    likeButton() {
        this.querySelector("button").addEventListener('click', () => {
            this.likes++;
            this.querySelector("button").innerHTML = this.likes + " ❤️";
        })
    }

    
    /**
     * Importing media from data
     */
     getMediaData(id) {
        // return the media in the JSON whose ID match the requested ID
        return data.media.find(media => media.id == id);
    }

    /**
     * Photographers name
     */
    getPhotographerName(media) {
        // return the photographer in the JSON whose ID match the photographer's ID in the media's data
        return data.photographers.find(photographer => photographer.id == media.photographerId).name;
    }


}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'