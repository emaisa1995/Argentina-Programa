let medallas = ["oro","plata","bronce"];

function medallaSegunPuesto(numero){
  if (numero >= 1 && numero <= 3){
    return medallas[numero - 1];
  }else {
    return "nada";
  }

}
