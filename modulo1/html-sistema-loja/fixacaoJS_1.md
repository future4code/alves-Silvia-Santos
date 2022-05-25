function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000
 let comissao2 = 100 
 let comissao3 = comissao2 * qtdeCarrosVendidos
 let vendas = valorTotalVendas * 0.05
  let valorComissao1 = vendas + comissao3
  let salarioTotal = valorComissao1 + salarioFixo
  const salarioFinal = salarioTotal
 
 return salarioFinal
 
}