import { LitElement,html } from "lit-element";



export class HeaderElement extends LitElement{
render(){
    return html`<h1>  header</h1>`
}


}

customElements.define('header-element',HeaderElement);