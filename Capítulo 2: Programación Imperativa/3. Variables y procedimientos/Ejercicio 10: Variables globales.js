let cargaMaximaEnKilogramos = 300;
function ascensorSobrecargado(personas){
  return (personas * pesoPromedioPersonaEnKilogramos) >= cargaMaximaEnKilogramos;
}
