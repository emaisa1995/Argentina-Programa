function meConviene(pulgadas,memoria){
  
  return cuantoCuesta(pulgadas, memoria) < 6000 && pulgadas >= 32 && memoria >= 8;
}
