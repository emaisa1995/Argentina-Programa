function escribirCartelitoOptimo(titulo, nombre, apellido, quiereCartelcorto){
  return escribirCartelito(titulo, nombre, apellido, (longitud(titulo+nombre+apellido)>15));
}
