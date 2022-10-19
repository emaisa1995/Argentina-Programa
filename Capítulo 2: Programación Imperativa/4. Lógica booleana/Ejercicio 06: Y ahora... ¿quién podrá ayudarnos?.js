function esFinDeSemana(dia){
  return dia === "sábado" || dia === "domingo";
}

function estaCerrado(esFeriado, dia, horario) {
  return esFinDeSemana(dia) || esFeriado || !dentroDeHorarioBancario(horario);
}
