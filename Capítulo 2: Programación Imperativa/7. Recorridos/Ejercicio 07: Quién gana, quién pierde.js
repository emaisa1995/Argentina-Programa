function gananciaPositiva(balanceDeUnPeriodo){
  let sumatoria = 0;
  for(let balance of balanceDeUnPeriodo){
    if (balance.ganancia > 0){
      sumatoria = sumatoria + balance.ganancia;
    }
  }
  return sumatoria;
}

function promedioGananciasPositivas(balanceDeUnPeriodo){
  return gananciaPositiva(balanceDeUnPeriodo)/cantidadDeBalancesPositivos(balanceDeUnPeriodo);
}
