module Pepo
  @energia = 1000

  def self.energia
    @energia 
  end

  def self.comer_alpiste!(gramos)
    @energia += gramos/2
  end  

  def self.volar_en_circulos!
    if self.energia > 1000
      @energia -= 15
    else
      @energia -= 5
    end
  end
  
  def self.hacer_lo_que_quiera!
    self.comer_alpiste!(120)
  end

end
