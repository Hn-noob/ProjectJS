console.log("Olá Mundo")
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
// const é uma variavel que não pode ser alterada
// var declara uma variavel pode declarar o valor junto a sua criação
// let declara uma variavel com escopo de bloco
//simbolo && significa "e"
//: +	Soma
//: –	Subtração
//: *	Multiplicação
//: /	Divisão (normal)
//: %	Módulo
//: ++	Incremento
//: —	Decremento



// number
// simbolo / = divisão, simbolo * = multiplicação
let numero = 100;
let numero2 = 2;
let resultado = numero / numero2;
console.log(resultado);



//string
let ola = "Olá";
let mundo = "Mundo";

let olamundo = "ola mundo";
console.log(olamundo);




// Booleano
let verdadeiro = true;
let falso = false;
let comparacao = 1 == 1;
console.log(comparacao);




// vetor ou Array
let vetor = [1, 22, 0, 100];
console.log(vetor[1]);
vetor[4] = 6;
console.log(vetor);
// pode se alterar um valor existente ou adicionar um novo valor em uma posição especifica
let array = [11, 21, 23, 433, 50]
// altera o valor da primeira posição
array[0] = 9000;
// Inseree um valor na apos o ultimo elemento
array[5] = 7;
console.log(array);

/* Objeto: É um tipo de dado composto pelos outros tipos de dados. Com ele, podemos organizar informaçoes relacionadas
em uma variavel*/
let carro = {
    rodas : 4,
    portas : 2,
    nome: "um carro",
    aVenda: true
};
// Para adicionar um objeto novo a um já existente pode ser utilizado das seguintes formas
let casa = {
    sofa : 1,
    janelas : 2
};
// as formas abaixo:
casa.portas = 2;
casa["comodos"] = 5;

// Obs: alteração funciona da mesma forma:
casa.sofa = 3;
casa["janelas"] = 3;
console.log(casa);



// Null: Tipo de dado que representa a falta de valor de qualquer outro tipo de dado
let x = null;
let y = 1;
y = null;


// Undefined: Este tipo de dado aparece quando criamos uma variavel e tentamos acessar seu valor antes de ter atribuido algo a ela
let b;
console.log(b);

// Undefined é diferente de Null
console.log(null === undefined);
// ocorre pois Null ainda é um tipo de dado e Undefined é quando o javascript não sabe qual o tipo de dado





// funções: As funções são utilizadas para criarmos uma sequencia de operaçoes para serem executadas:
let olaMundo = function(){
    console.log("Olá Mundo");
    console.log("Olá Mundo novamente");
    console.log("Olá Mundo mais uma vez");
}

olaMundo(); //essa é a função executar
// Nota: para fazer a função executar, voce  precisa chamala com os parenteses;

// Outra forma de criar uma função é chamando o funcion com o nome dela:
function salveMundo(){
    console.log("Salve Mundo");
    console.log("Salve Mundo novamente");
    console.log("Salve Mundo mais uma vez");
}
salveMundo();


// também é possivel passar valores para a função acessar:
let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado);
}
somar(1,2);
somar(4,4);
somar(99,1);

// o ultimo recurso que estamos vendo da função (por enquanto) é o comando return segue abaixo uma versão simplificada:
// primeira coisa que se deve saber é que o return pára a função e devolve um valor.
let soma = function(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
};

let subtrair = function(valor3, valor4){
    console.log(valor3 - valor4);
    return valor3 - valor4;
};
// Obs: valores apos o return não serão executados
/* explicando a utilidade do return: uma função return devolve  um valor que podemos guardar na variavel,
O return faz com que a função seja uma  ferramenta excelente para tornarmos nosso codigo mais simples de entender,
Curiosidade: caso voce não coloque o return, por default as funções devolvem undefined.*/



// If: É um comando que permite executar um codigo apenas se uma condição entre parenteses for verdadeira (true)
let a = 1;
if(x == 1){
    //Executa o codigo
};
// Ex2:
let disponivel = true;
let quantidade = 5;

if(quantidade > 0 && disponivel){
    console.log("produto disponivel a venda");
};




// Else: O comando ELSE (senão) serve para executarmos um trecho de codigo quando o IF for falso
let nome = ("Hn");
if(nome == "Maria"){
    console.log("acesso permitido!")
}else{
    console.log("acesso negado!")
};

//IF ELSE IF ELSE ...: Caso voce possua muitas condições,pode ficar dificil de ler o codigo
//ELSE IF: Em caso como acima, é interessante usar o comando ELSE IF (senão se)
let cidade = ("Minas Gerais");
    if(cidade == "Porto Alegre"){
        console.log("Sua Cidade é Porto Alegre")
}           else if (cidade == "São Paulo"){
                console.log("Sua Cidade é São Paulo")
}           else if(cidade == "Rio de Janeiro"){
        console.log("Sua Cidade é Rio de Janeiro")
} else {
    console.log("Sua cidade é Minas Gerais") 
};






/*Escopo - Bloco de espaço é definida pela região ao qual as variaveis e outros dados são visiveis
Escopo Global: Uma variavel declarada fora de uma função, torna-se global e todos os scripts e funções em uma pagina da Web
podem acessa-la
Ex: */
let valor = 12;

let umaFuncao = function(){
    console.log(valor);
}

if(valor == 12){
    umaFuncao();
    console.log(valor);
}

//Escopo de bloco: Variaveis declaradas dentro de um local cercado por {}
//Escopo de bloco: Estas variaveis não podem ser acessadas fora de seu escopo
let varGlobal = 1;
function funcaoGlobal(){
    let varFuncao = varGlobal + 1;

    function funcaoLocal(){
        let varFuncLocal = varFuncao + varGlobal;
        console.log(varFuncLocal);
    }
}



//VAR: O var só possui escopo global e de bloco para funções
let c = 1;

if(c == 1){
    var d = 99;
}

console.log(d);
//O exemplo com var exibirá o valor,e o com let causara erro devido ao escopo



//Switch: O switch serve para executar um codigo de acordo com diversos possiveis resultados.
//Switch: O switch é a alternativa perfeita ao if/else caso existam muitas comparações de um valor.
//Case: como pode ver abaixo para cada possibilidade é necessario haver um "case".
//Break: O comando "break" serve para encerrar a leitura do switch. Sem ele codigo do base abaixo será executado.
//Default: O default é o noss "else" e executará quando nenhum case corresponder ao valor.
let codigo;
switch (codigo) {
    case 50:
        console.log("Banana");
        break;
    case 9540:
        console.log("Limão");
        break;
    default:
        console.log("Desconhecido");
        break;
};
//Comparação: O switch compara usando ===, então tanto o valor quanto o tipo do dado precisam ser iguais.
let comand = "0";

switch (comand) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("um");
        break;
    default:
        console.log("n/a");
        break;
};


//Para se saber se há uma determinada propriedade dentro de um objeto se utiliza o sinal "." exemplo abaixo:
let objetoServidor = {
    acesso: true,
    login: "mundojs",
};

let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor",
};

function conexaologin(repostaDoServidor){
    if (repostaDoServidor.erro == null){
        if(repostaDoServidor.acesso){
            console.log(`login: ${repostaDoServidor.login}`);
        }else{
            console.log("acesso negado!");
        }
    }else{
        console.log(repostaDoServidor.erro);
    }
}


//Loop: os "loops" são os laçõs de repetição ou seja, aqueles comandos que fazem executar o codigo diversas vezes
//For: O "for" é um comando que executa X vezes uma ação seguindo de forma como foi definido para ele faze-la.
/* Instrução: a intrução de execução do "for" é dividida em 3 partes separadas por ponto e vigula.
1a) Instrução ocorrerá quando o "for" iniciar. Nomalmente é a criação de uma variavel de controla indicado por (let i = 0)
2a) A condição para encerrar o "for". Neste caso, ele executará enquanto "i" for menor que 10 indicado por (1 < 10)
Importante: Caso essa condição nunca se torne "false", teremos um loop infinito.
3a) Instrução que ocorrerá no final de cada repetição. Normalmente é um incremento de 1 da variavel indicado por (i++)
(começara por "i" = 0 e irá subir.*/
for(let i = 0; i < 10; i++){
    console.log(i)
}

//Utilidade: Além de executar uma mesma instrução várias vezes. Ele é perfeito para ler vetores. . .
let lista = ["cachorro", "gato", "galinha"];

for(let l = 0; l < lista.length; l++){
    console.log(lista[l])
} //lista.length: retorna um numero = ao numero de itens nesse vetor
//Utilidade: . . .ou modificar todos os itens de um vetor.
let valores = [1,2,3,4,5];

for(let k = 0; k < valores.length; k++){
    valores[k] = valores[k] * 2;
    console.log(valores[k]);
}

/*Observação: Note que os passos padrões são opcionais. Mas caso você queira executar de outra forma, existem loops melhores 
para isso. Ex:*/
let p = 5;
for(; p < 10; p++){
    console.log(p);
};
let q = 3;
for(; q < 10; ){
    console.log(q);
    q = q + 2;
}



//For of: este loop é especifico para iterar entre os elementos de uma lista.(iterar seria percorrer um a um)
/*Voce pode ler ele como "Para cada item de uma lista". No exemplo abaixo, dia começará sendo com o valor "segunda" e o 
último loop será "sexta"*/
let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];

for(let dia of dias){
    console.log(dia);
}

//Como já notado, percorrer a lista em ordem crescente é o coração do "for of".
for(let number of [0,1,2,3,4,5,6,7]){
    console.log(number);
}
//Obs: Caso você precise trabalhar com índices ou múltiplas posições da lista, talvez seja melhor usar o "for" normal.



//While: Este loop funciona de forma bem simples. Enquanto (while) a condição for "true", executara o codigo no caso o que está entre chaves.
let num = 1;

while(num < 10){
    console.log("valor:" + num);
    num = num + 2
}
//Obs: Lembre que você precisa fornecer uma forma para que o loop termine, caso contrário terá um loop infinito.
/*let num2 = 1;

while(num2 < 10){
    let valor = 0;
    console.log("valor:" + valor);
    valor = valor + 2;
} Quase crashei o pc com isso*/

/*Do While: Similar ao "while", o "do while" executa um trecho de código e depois testa se o executara novamente.
Ambos "while" e "do while" tem uma lógica similar. A situação que definirá qual o melhor loop para seu código.*/
//Abaixo uma com "do while"
let num2 = 1;

do{
    console.log(num2);
    num2++;
}
while(num < 10);
//Abaixo uma com "while"
let num3 = 1;

while(num3 < 10){
    console.log(num3);
    num3++;
}
//Break: O "break" é um comando que podemos utilizar quando queremos parar/encerrar o loop na hora
//ex1:
let num4 = 1;

while(num4 < 10){
    console.log(num4);
    if(num4 == 6){
        break;
    }
    num4++;
}
//Ex2:
for(let numero2 of [1,2,3,4,5,6,7]){
    console.log(numero2);
    if(numero2 == 5){
        break;
    }
}
//Continue: com este comando, é possivel iniciar a proxima repetição do loop.
//Ex1:
for(let numero3 of [1,2,3,4,5,6,7]){
    if(numero3 == 5 || numero3 ==7){
        continue;
    }
    console.log(numero3);
}



//propriedade "length" = comprimento de um vetor.