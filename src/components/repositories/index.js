import {CustomElement} from '../components.js';
import getRepos from './service.js';

class GitHubRepos extends CustomElement {
    constructor() {
        super('ul', template());
    }
}
export default () => customElements.define('git-hub', GitHubRepos);

async function template(){
    const arr = await getRepos();
    const tableHTML = `
    
        ${arr.map(r => r.toTableRow()).join('\n')}
    
    `;
    return tableHTML;
}
//model
export class GitHubRepo {
    constructor({name, stars, license, url, description, size}){
        this.name = name;
        this.stars = stars;
        this.license = license;
        this.url = url;
        this.description = description;
        this.size = size;
    }

    get starsCount(){
        return this.stars > 0 ? `<i class="far fa-star" title="${this.stars} stars"></i>` : '';
    }

    toString(){
        return `${this.name} ${this.starsCount}`;
    }

    toTableRow(){
        if(this.description)
            return `
            <li><a href="${this.url}" target="_blank"><i class="fab fa-github"></i>${this.toString()}</a><br><small>${this.description}</small></li>
            `;
        else
            return `
            <li><a href="${this.url}" target="_blank"><i class="fab fa-github"></i>${this.toString()}</a></li>
            `;
    }
};