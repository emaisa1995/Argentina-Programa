module Norita
  @energia = 500

  def self.volar_en_circulos!
    @energia -= 30
  end

  def self.comer_alpiste!(gramos)
    @energia -= gramos
  end  
end
