import { LitElement, html } from "lit-element";
export class DescripcionElement extends LitElement{

    render(){
return html `

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


<div class="senior">
<img src="../IMG/senior.PNG">
</div>

<div class="vertical"></div>


<div class="textexten">

<h4>BIENVENIDO A</h4>
<p>Lorem ipsum dolor sit amet, consectetuer <br>
  adipiscing elit, sed diam nonummy nibh <br>
  euismod tincidunt ut laoreet dolore <br>
  magna aliquam erat volutpat. Ut wisi <br>
  enim ad minim veniam, quis nostrud

</p>
<img src="../IMG/faceins.PNG">
</div>

<img class="bienvenidoeventum" src="../IMG/bienvenidoeventum.PNG">


<h1 class="expertos2">Expertos en eventos</h1>



`





    }





}
customElements.define('descripcion-elements',DescripcionElement)