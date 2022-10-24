function gananciasDeBalancesPositivos(balanceDeUnPeriodo){
  return ganancias(balancesPositivos(balanceDeUnPeriodo));
}
function promedioDeBalancesPositivos(balanceDeUnPeriodo){
  return promedio(gananciasDeBalancesPositivos(balanceDeUnPeriodo));
}
