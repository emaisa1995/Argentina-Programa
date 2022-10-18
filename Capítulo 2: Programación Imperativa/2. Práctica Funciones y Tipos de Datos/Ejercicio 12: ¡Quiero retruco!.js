function puntosDeEnvidoTotales(numero1, palo1, numero2, palo2){
  
  if (palo1 === palo2){
    return valorEnvido(numero1) + valorEnvido(numero2) + 20;
  }else {
    return Math.max(valorEnvido(numero1), valorEnvido(numero2));
  }
  
}
