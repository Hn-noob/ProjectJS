if (10 > 5){
    // Faz alguma coisa
}else{
    // Faz outra coisa
}

let escopoGlobal = 1;

if(escopoGlobal == 1){
    let escopoLocal = 2;

    if(escopoLocal == 2){
        let escopoGlobal2 = escopoGlobal + escopoLocal;
        console.log(escopoGlobal2);
    }
}

const texto = "mundojs";

switch(texto){
    case "mundojs":
        console.log("Olá Mundo");
        break;
    case "lalala":
        console.log("land");
        break;
    case "Kame":
        console.log("hameha")
        break;
    default:
        console.log("????");
}