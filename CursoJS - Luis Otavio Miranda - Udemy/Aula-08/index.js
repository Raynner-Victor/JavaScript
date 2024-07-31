/*
Raynner victor Silva tem 23 anos, pesa 63 kg tem 1.72 de altura e seu IMC é de 21.29529475392104
Raynner Victor nasceu em 1999

 */

const nome = ('Raynner');
const sobreNome = ('Victor Silva');
const idade = 24;
const peso = 63;
const alturaEmM = 1.72;
let IndiceMasaCorporal = peso / ( alturaEmM * alturaEmM );
let anoNascimento = 2023 - idade ;


console.log(nome + ' ' + sobreNome + ' ' + ' tem ' + idade + ' anos, pesa ' + peso + ' Kg' )
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${IndiceMasaCorporal}`)
console.log(nome, sobreNome, 'nasceu em', anoNascimento)