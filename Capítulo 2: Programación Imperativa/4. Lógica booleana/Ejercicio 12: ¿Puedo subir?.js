function puedeSubirse(altura, acompañada, afeccionCardiaca){
  return (altura === 1.5 && !acompañada && !afeccionCardiaca) || (altura === 1.2 && acompañada && !afeccionCardiaca);
  
}
