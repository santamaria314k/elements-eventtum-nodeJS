import { LitElement,html } from "lit-element";



export class FooterElement extends LitElement{
render(){
    return html`<h1>  Footer</h1>`
}


}

customElements.define('footer-element',FooterElement);