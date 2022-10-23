//En julio ganó $50, en agosto perdió $12, etc
let balancesUltimoSemestre = [
  { mes: "julio", ganancia: 50 }, 
  { mes: "agosto", ganancia: -12 }, 
  { mes: "septiembre", ganancia: 1000 }, 
  { mes: "octubre", ganancia: 300 }, 
  { mes:  "noviembre", ganancia: 200 }, 
  { mes: "diciembre", ganancia: 0 }
];

function gananciaSemestre(balances) {
  return balances[0].ganancia + balances[1].ganancia +
         balances[2].ganancia + balances[3].ganancia +
         balances[4].ganancia + balances[5].ganancia;
}

//En enero la empresa ganó $80, en febrero, $453, en marzo $1000
let balancesPrimerTrimestre = [
  { mes: "enero", ganancia: 80 }, 
  { mes: "febrero", ganancia: 453 }, 
  { mes: "marzo", ganancia: 1000 }
];
