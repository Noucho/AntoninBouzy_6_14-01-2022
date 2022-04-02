/**
 * Sorting photographer's medias
 */
export class MediasSelect extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Selection template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <label for="sortMedias"> Trier par </label>
        <select id="sortMedias" class"hidden">
            <option value="date">Date</option>
            <option value="likes">Popularité</option>
            <option value="title">Titre</option>
        </select>
        `;
        this.appendChild(template.content);
        this.render();
    }

    /**
     * Rendering
     */
    render() {
        
    }


}