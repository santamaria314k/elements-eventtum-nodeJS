import { LitElement,html } from "lit-element";



export class MyElement extends LitElement{
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
    
    
    
  <div class="tem">
  <div class="contenedor">



    <button type="button" class="btn btn-warning">INGRESA</button>
    <h1>¿YA ERES CLIENTE?</h1>
  </div>


  <div class="contenedor2">
    <img class="im1" src="../IMG/eventum.png">
    <h3>Crea,sueña,realizalo</h3>
    <button type="button" class="btn btn-warning ">CONOCENOS</button>


  </div>

</div>


<h1 class="expertos">Expertos en eventos</h1>


    
    
    `
}


}

customElements.define('my-element',MyElement);