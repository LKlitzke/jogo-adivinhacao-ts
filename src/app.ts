
/*
    --------------- Algoritmo para o Jogo da Adivinhação em TypeScript --------------- 

                AUTOR: Lucas Eduardo Klitzke da Silva
                CURSO: Engenharia da Computação 10P - FAESA
                DISCIPLINA: Desenvolvimento de Aplicações Web I (2021.2)
                PROFESSOR: Otávio Lube dos Santos

*/

// Array de cores para HTML5
const arrayCores: string[] = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    /*"Black",*/ "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender",
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
    "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
    "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
];

// Gerador de array com cores aleatórias sem repetição
function gerarCores(): string[]{
    const arrayRandom: string[] = new Array(10);
    for(var i=0; i<arrayRandom.length; i++){
        do{
            var aux:string = arrayCores[Math.floor(Math.random() * arrayCores.length)];
        }while(arrayRandom.includes(aux));
        arrayRandom[i] = aux;
    }
    arrayRandom.sort();
    return arrayRandom;
}

var arrayRandom: string[] = gerarCores();

// Início da apresentação do jogo
alert("Bem-vindo ao Jogo da Adivinhação em Typescript + Javascript\nClique em OK para começar!");
do {
    var nome: string = prompt("Digite o seu nome:");
} while(nome == null || nome == "");
alert("Olá, " + nome + "! Vamos começar o jogo...");

// Lógica para a seleção da cor correta, considerando o refresh da página
var corCorreta: string = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
var acerto: boolean = false;
var chute: string = "";

// Copia o array de cores para posterior remoção da opção incorreta
const arrayLower: string[] = arrayRandom.map(arrayRandom => arrayRandom.toLowerCase());

// Loop do jogo enquanto o usuário não acertar a cor
do {
    chute = window.prompt("Estou pensando em alguma dessas cores:\n  > " + arrayRandom.join('\n  > ') + "\n Qual delas é a correta?");
    if(chute.toLowerCase() == corCorreta.toLowerCase()){
        acerto = true;
        alert("Parabéns " + nome + ", você acertou a cor! :D");
        document.body.style.backgroundColor = chute;
    }
    else if(chute == null || chute == ""){
        alert("Digite alguma coisa, vamos vamos!");
    }
    else if(arrayLower.includes(chute.toLowerCase())) {
        var Aux = arrayLower.indexOf(chute.toLowerCase());
        console.log(Aux + " " + chute);
        if(Aux != -1){
            arrayRandom.splice(Aux,1);
            arrayLower.splice(Aux,1);
        } 

        alert(
            "Esta não é a cor correta!\n\nDica: A SUA cor está alfabeticamente"
            + (chute.toLowerCase() > corCorreta.toLowerCase() ? " DEPOIS " : " ANTES ")
            + "da que eu pensei. \nTente novamente!");
    }
    else {
        alert("Esta cor não existe na listagem. Tente novamente!");
    }
} while(acerto == false);

console.log("\n\nVocê não está vendo o Console para trapacear no jogo, né?");

