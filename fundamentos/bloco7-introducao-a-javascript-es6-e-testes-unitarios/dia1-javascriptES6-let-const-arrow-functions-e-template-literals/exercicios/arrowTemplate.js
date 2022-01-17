/*const testingScope = (escopo) => (escopo === true ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !)': 'Não devo ser utilizada fora meu escopo (else)');
console.log(testingScope(true));
console.log(testingScope(false));*/


const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = '${ifScope} ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  testingScope(true);
 
  