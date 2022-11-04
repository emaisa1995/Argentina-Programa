module Docente
  def self.nota_conceptual(nota)
    if nota > 8
      "Sobresaliente"
    else
      if nota > 6
        "Satisfactoria"
      else
        "No satisfactoria"
      end
    end
  end
end



module Pepita
  @energia = 1000

  def self.energia
    @energia 
  end

  def self.volar_en_circulos!
    @energia -= 10
  end

  def self.comer_alpiste!(gramos)
    @energia += gramos * 15
  end  

  def self.debil?
    self.energia < 100
  end

  def self.feliz?
    self.energia > 1000
  end

  def self.hacer_lo_que_quiera!
    if self.debil?
      self.comer_alpiste!(10)
    elsif self.feliz?
      5.times {self.volar_en_circulos!}
    else   
      3.times {self.volar_en_circulos!}
    end
  end
end
