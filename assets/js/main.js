function convertirCelsius(){
  var valor = document.getElementById('farenheit').value;
  document.getElementById("celsius").value = (valor * (9 / 5) + 32);
}
function convertirFarenheit(){
  var valor = document.getElementById("celsius").value;
  document.getElementById("farenheit").value = (valor - 32) * (5/9);
}
