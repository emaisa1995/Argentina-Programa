function masDificilDeCocinar(postre1,postre2){
  if (longitud(postre1.ingredientes) > longitud(postre2.ingredientes)){
    return postre1
  }else {
    return postre2;
  }
}
