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
            <option value="date" aria-label="Trier par date">Date</option>
            <option value="likes" aria-label="Trier par nombre de likes">Popularité</option>
            <option value="title" aria-label="Trier par titres">Titre</option>
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