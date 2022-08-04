const valorNumero = (numero) => {
  if (typeof numero !== 'number') {
    return 'o parâmetro deve ser um número';
  }
  if(numero > 0) return 'positivo'
  if(numero < 0) return 'negativo'  
  return 'neutro'
}

module.exports = valorNumero;