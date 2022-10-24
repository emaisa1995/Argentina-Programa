function ganancias(balanceDeUnPeriodo) {
  let ganancias = [];
  for (let balance of balanceDeUnPeriodo) {
    agregar(ganancias, balance.ganancia);
  }
  return ganancias;
}
