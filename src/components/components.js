export class CustomElement extends HTMLElement {
    constructor(tag, template) {
        super();
        this.render(tag, template);
    }
    async render(tag, template){
        const element = document.createElement(tag);
        element.innerHTML = await template;
        this.appendChild(element);
    }
}