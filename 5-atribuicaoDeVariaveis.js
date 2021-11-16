console.log("Trabalhando com atribuições de variáveis");
const idade = 29;
const primeiroNome = "Luciana"; //trocar o const por let para sobrescrever abaixo.
const sobrenome = "Moraes";

console.log(primeiroNome + sobrenome); //imprimi tudo junto

console.log(primeiroNome, sobrenome); //a vírgula representa um espaço
//console.log(nome + " " + sobrenome); // " " representa um espaço
 
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //Nas versões mais novas do JavaScript conseguimos fazer a interpolação (introdução ou intercalação) de variáveis por meio de ${}

//nome = nome + sobrenome; //sobrescrevendo
//console.log(nome);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto); //vai imprimir junto
