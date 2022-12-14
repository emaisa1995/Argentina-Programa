module Pepita
  @energia = 1000
  @ciudad = Obera

  def self.energia
    @energia 
  end

  def self.ciudad
    @ciudad
  end

  def self.cantar!
    'pri pri pri'
  end

  def self.comer_lombriz!
    @energia += 20
  end

  def self.volar_en_circulos!
    @energia -= 10
  end

  def self.volar_hacia!(destino)
    self.gastar_energia!(destino)
    @ciudad = destino
  end

  def self.gastar_energia!(destino)
    @energia -= distancia_a(destino)/2
  end

  def self.distancia_a(destino)
    (@ciudad.kilometro - destino.kilometro).abs
  end
end
