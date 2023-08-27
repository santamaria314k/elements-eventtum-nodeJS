import { LitElement,html } from "lit-element";



export class TargetsElement extends LitElement{
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
    
    
  <div class="content">

  <div class="oneconts">
    <h6 class="salon">Salon Amarillo</h6>
    <p class="text-lowercase"> Lorem ipsum dolor sit <br>
      amet, consectetuer adi- <br>piscing elit, sed diam <br>
      nonummy nibh euismod <br>
      tincidunt ut laoreet
    </p>
    <button type="button" class="btn btn-warning">Mas Info</button>

  </div>


  <div class="oneconts">
    <h6 class="salon">Salon Amarillo</h6>
    <p class="text-lowercase"> Lorem ipsum dolor sit <br>
      amet, consectetuer adi- <br>piscing elit, sed diam <br>
      nonummy nibh euismod <br>
      tincidunt ut laoreet
    </p>
    <button type="button" class="btn btn-warning">Mas Info</button>

  </div>
  <div class="oneconts">
    <h6 class="salon">Salon Amarillo</h6>
    <p class="text-lowercase"> Lorem ipsum dolor sit <br>
      amet, consectetuer adi- <br>piscing elit, sed diam <br>
      nonummy nibh euismod <br>
      tincidunt ut laoreet
    </p>
    <button type="button" class="btn btn-warning">Mas Info</button>

  </div>
</div>

    
    
    
    
    
    `
}


}

customElements.define('targets-element',TargetsElement);