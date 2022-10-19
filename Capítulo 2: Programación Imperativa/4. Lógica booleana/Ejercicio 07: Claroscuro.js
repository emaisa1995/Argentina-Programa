function tieneContraste(colorLetra, colorFondo){
  return (esTonoClaro(colorLetra) && !esTonoClaro(colorFondo)) || (!esTonoClaro(colorLetra) && esTonoClaro(colorFondo));

}
