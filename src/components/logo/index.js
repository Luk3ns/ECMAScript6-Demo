import {CustomElement} from '../components.js';
import templateHtml from './template.html';
class Logo extends CustomElement {
    constructor() {
        super('div',templateHtml);
    }
}
export default () => customElements.define('logo-lukens', Logo);