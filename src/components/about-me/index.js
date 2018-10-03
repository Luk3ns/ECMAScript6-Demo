import {CustomElement} from '../components.js';
import templateHtml from './template.html';
class AboutMe extends CustomElement {
    constructor() {
        super('div',templateHtml);
    }
}
export default () => customElements.define('about-me', AboutMe);