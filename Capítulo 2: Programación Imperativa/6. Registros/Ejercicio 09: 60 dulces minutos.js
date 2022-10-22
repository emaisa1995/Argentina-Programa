function agregarAPostresRapidos(postresRapidos,postre){
  if (postre.tiempoDeCoccion <= 60){
    agregar(postresRapidos, postre);
  }
}
