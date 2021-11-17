console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //remover um item da lista 
//(1 posição do item na lista, 1 quantidade de itens que será removido)
//a contagem começa no "0", o item que será removido é São Paulo
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //imprimir somente um item da lista
//[1 posição do item na lista]
 