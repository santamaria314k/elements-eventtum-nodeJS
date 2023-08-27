import { LitElement,html } from "lit-element";



export class FooterElement extends LitElement{
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
    
    <div class="opiniones">
    <img class="cara1" src="../IMG/perfilrecorte.png">

    <div class="op1">
      <p> <br> Lorem ipsum dolor sit amet, consec- <br>tetuer adipiscing elit, sed diam no
        <br>★★★ <br><br>
      </p>
    </div>

    <img class="cara2" src="../IMG/perfilrecorte.png">

    <div class="op2">
      <p> <br> Lorem ipsum dolor sit amet, consec- <br>tetuer adipiscing elit, sed diam no
        <br>★★★ <br><br>
      </p>
    </div>

  </div>




  <footer>
    <br><br>
    <img src="../IMG/footermylog.PNG">
    <br><br><br>
  </footer>
    
    
    `
}


}

customElements.define('footer-element',FooterElement);