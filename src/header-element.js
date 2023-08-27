import { LitElement,html } from "lit-element";



export class HeaderElement extends LitElement{
render(){
    return html`
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Modelo Eventtun</title>
      <link rel="stylesheet" href="../CSS/INDEX.css">
    
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    </head>
    
      <header>
        <nav class="navbar navbar-expand-lg navbar-fixed-top bg-body-tertiary">
          <div class="container-fluid bg-black col">
            <a class="navbar-brand" href="#"><img class="init" src="../IMG/log.png"></a>
            <button class="navbar-toggler bg-white d-lg-none" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              </div>
            </div>
          </div>
        </nav>
    
    
      </header>`
}


}

customElements.define('header-element',HeaderElement);