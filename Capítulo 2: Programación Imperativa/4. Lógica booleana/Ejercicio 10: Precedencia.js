function pagaConTarjeta(seCobraInteres, tarjeta, efectivoDisponible) {
  return !seCobraInteres && cuotas(tarjeta) >= 3 || efectivoDisponible < 100;
}
