/**
 * user's profile page
 */
export class UserPage extends HTMLElement {
    constructor() {

        // ID attribute needed

        super();

        // getting user Data

        this.data = this.getUserData(this.id);
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="max-w-screen-xl w-full h-10 lg:h-20 mx-auto mb-8">
            <fisheye-logo></fisheye-logo>
        </div>
        <main id="content" class="max-w-screen-xl w-full mx-auto">
            <photographer-profile></photographer-profile>
            <medias-select></medias-select>
            <photographer-medias></photographer-medias>
            <photographer-infos></photographer-infos>
        </main>
        <contact-modal></contact-modal>
        <media-lightbox></media-lightbox>
    `;
        this.appendChild(template.content);
        this.render();
        // change the page title
        document.title = this.data.name + " - Fisheye";
    }
    
    /**
     * Error if invalid User ID
     */

    render() {
        if (!this.data) {
            this.querySelector('photographer-profile').remove();
            this.querySelector("main").insertAdjacentHTML('afterBegin',
            "<p>L'ID que vous recherchez est invalide ou le compte a été supprimé.</p>");
            this.querySelector("main").insertAdjacentHTML('afterBegin',
            "<h3>Cet utilisateur n'existe pas 🕵️</h3>");
        }
    }

    /**
     * Importing user data from json
     */

    getUserData(id) {
        return data.photographers.find(user => user.id == id);
    }
}

// Data import from JSON

import data from '../assets/data/FishEyeDataFR.json'

