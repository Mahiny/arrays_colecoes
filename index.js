let numeros2 = [1,2,3,4];
console.log(numeros2)
function inverterArray (array){
  let arrayInvertido = [];
  arrayInvertido.push(array[3]);
  arrayInvertido.push(array[2]);
  arrayInvertido.push(array[1]);
  arrayInvertido.push(array[0]);
  return arrayInvertido;
}

console.log(inverterArray(numeros2));

// somarArray()

let somar1 = [1,2,3] // 6
let somar2 = [10, 3, 10, 4] // 27
let somar3 = [-5,100] // 95

function somarArray (array) {     // declarando a função
let soma = array[0] + array[1] + array[2] + array[3]
console.log(soma);
}

somarArray(somar2); //chamando a função

////////////////////////////////////////////////////

// Simulação Array.join()

let oi = ["o","l","á"]; //deve retornar a string "olá".
let bye = ["t","c","h","a","u"] //deve retornar a string "tchau".

function join(array) {
  let palavraoi = array[0] + array[1] + array [2]  //Concatenação da array oi (linha 31)
  let palavratchau = array[0] + array[1] + array[2] + array[3] + array[4] // concatenação da arrar bye (linha 32)
  return palavratchau  //Para retornar olá alterar a variavel para "palavraoi"
}
console.log(join(bye)) //para imprimir a olá, alterar a variavel para oi(linha31)

/*
function join(array){
    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"
    
    console.log(elements.join(''));
    // expected output: "FireAirWater"
    
    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"
    
}*/

///////////////////////

//Coleção de Filmes

let filmes = ['star wars', 'matrix',  'mr. robot', 'o preço do amanhã',  'a vida é bela']

// function maiuscula (array){   //não consegui criar a função para deixalos maiusculo
  let result = filmes.map(lista =>{ //este modo cria uma nova variavel como maisucula 
  return lista.toUpperCase();
})
//}
console.log (result);