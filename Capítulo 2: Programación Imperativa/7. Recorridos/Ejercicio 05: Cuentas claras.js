function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
  let cantidad = 0;
  for (let balance of balancesDeUnPeriodo) {
    if  (balance.ganancia > 0){
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}
