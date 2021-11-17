console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
console.log("Destinos possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //remover um item 
}else{
    console.log("Não é maior de idade e não posso vender");
} 

console.log(listaDeDestinos);

// console.log(idadeComprador >18);
// console.log(idadeComprador >18);
// console.log(idadeComprador <=18);
// console.log(idadeComprador >18);
// console.log(idadeComprador ==18); **quando for igual, usar duas vezes ==, pois se for só uma, estará atribuindo um valor.
 