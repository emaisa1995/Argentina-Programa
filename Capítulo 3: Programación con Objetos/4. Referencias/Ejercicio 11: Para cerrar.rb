module Fideos
  @ajies = 0
  def self.ajies
    @ajies
  end
  def self.agregar_ajies!(cantidad)
    @ajies+=cantidad
  end
  def self.quitar_ajies! (cantidad)
    @ajies-=cantidad
  end
    def self.descartar_la_salsa!
    @ajies = 0
  end
  def self.picantes?
    @ajies>2
  end
end

module Jor
  def self.plato_del_dia
    @platodia
  end
  def self.plato_del_dia=(plato)
    @platodia=plato
  end
  def self.picantear!
    @platodia.agregar_ajies!(5)
  end
end
module Luchi
  def self.suavizar! (platodeldia,quitar)
    if platodeldia.ajies>10
      platodeldia.descartar_la_salsa!
    else
        platodeldia.quitar_ajies!(quitar)
    end
  end
end
