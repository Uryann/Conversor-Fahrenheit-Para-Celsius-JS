function conversorTemperatura(valTemp) {
  valTemp = parseFloat(valTemp);
  document.getElementById("valorTempCelcius").innerHTML=(valTemp-32)/1.8;
}

