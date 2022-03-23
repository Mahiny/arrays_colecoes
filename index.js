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

  let result = filmes.map(lista =>{ //este modo cria uma nova variavel como maisucula 
  return lista.toUpperCase();
})
//}
console.log (result);

function converterArrayParaMaiusculas(array){
    let arrayMaiusculo = [];
    arrayMaiusculo.push(array[0].toUpperCase());
    arrayMaiusculo.push(array[1].toUpperCase()); 
    arrayMaiusculo.push(array[2].toUpperCase());
    arrayMaiusculo.push(array[3].toUpperCase());
    arrayMaiusculo.push(array[4].toUpperCase());

    return arrayMaiusculo
}

let filmesAnimados = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

console.log(filmesAnimados);
console.log(converterArrayParaMaiusculas(filmesAnimados));

function adicionarElementos(array,array2){
    array.push(array2[0]);
    array.push(array2[2]);
    array.push(array2[2]);
    array.push(array2[3]);
    array.push(array2[4]);

    return array;
}

console.log(adicionarElementos(filmes,filmesAnimados));

let todosOsFilmes = adicionarElementos(filmes,filmesAnimados);
console.log(todosOsFilmes);
let intrusoRemovido = todosOsFilmes.pop();
console.log(todosOsFilmes);
console.log(intrusoRemovido);

    /*function comparaPontuacoes(asia,euro){
        if(asia[0]) = euro[0] {
            console.log("Na primeira rodada os dois são iguais")
        } else {
            console.log("Na primeira pontuação as duas são diferentes")
        }
    }*/

 // Estruturas de repetição // Laços de repetição
 
  // Para um índice começando em 0 até 10 e o indice indo de um em um faça alguma coisa
  // let indice = 0 >> ponto de partida ou critério inicial
  // indice < 10 >> criterio de parada do laço de repetição
  // indice ++ >> passo do ponto de partida
  // indice ++ >> adicionando 1 em indice
  // indice ++ >> indice += 1 >> indice = indice + 1
  // indice = indice + 2 >> indice += 2
  //
  // let numeros = [10, 20, 30, 40];


  /*for (let indice = 1; indice < 1000; indice++) {
      console.log("EStou em um laço de repetição na interação" ${indice});
  }*/
