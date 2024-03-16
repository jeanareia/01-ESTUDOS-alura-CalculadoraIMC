let ContadorCliques = 0;
InputValor = '';
let UserAltura;
let UserPeso;
let UserIMC;
let ResultadoDecimal;
let IMCAbaixo = 18.5;
let IMCNormal = 25;
let IMCSobrepeso = 30;
let ImagemResultado;
let PesoMaximo = 0;
let PesoMinimo = 0;
let PesoMaximoDecimal = 0;
let PesoMinimoDecimal = 0;

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function ExibirTextoMensagemIniciar (){
    ExibirTextoNaTela('h1', 'Calculadora IMC');
    ExibirTextoNaTela('p', 'Digite sua altura em centímetros');
} 

function ProximaEtapa(){
    EstadoInicial()
    while (ContadorCliques==0) {
        UserAltura = document.querySelector ('Input').value;
        ExibirTextoNaTela('p', 'Digite sua altura em centímetros');
        ContadorCliques ++;
        EstadoInicial();
    }
    LimpaValores();
    ExibirTextoNaTela('p', 'Digite peso em Kg');
    Estadointermediario();
}

function CalcularIMC(){
    UserPeso = document.querySelector ('Input').value;
    console.log("Altura=", UserAltura);
    console.log("Peso=", UserPeso);
    console.log("IMC=", UserIMC);
    console.log("IMC=", ResultadoDecimal);
    ResultadoDecimal = UserPeso/((UserAltura/100) * (UserAltura/100));
    UserIMC = ResultadoDecimal.toFixed(2);
    ExibirTextoNaTela('h1', `Seu IMC é: ${UserIMC}`);
    console.log("IMC=", UserIMC);
    console.log("IMC=", ResultadoDecimal);
    EstadoFinal();

    PesoMaximoDecimal = IMCNormal * ((UserAltura/100) * (UserAltura/100));
    PesoMaximo = PesoMaximoDecimal.toFixed(2);
    console.log("Maximo", PesoMaximo);
    PesoMinimoDecimal = IMCAbaixo * ((UserAltura/100) * (UserAltura/100));
    PesoMinimo = PesoMinimoDecimal.toFixed(2);
    console.log("Minimo", PesoMinimo);

    if (UserIMC<IMCAbaixo) {
        DefinirImagemIMCAbaixo()
        console.log("Abaixo do peso");
        ExibirTextoNaTela('p', `Seu peso ideal seria de ${PesoMinimo} KG até ${PesoMaximo} KG.`);
    } else {
        if (UserIMC<IMCNormal) {
            DefinirImagemIMCNormal()
            console.log("Peso Normal");
            ExibirTextoNaTela('p', `Seu peso ideal está entre ${PesoMinimo} KG e ${PesoMaximo} KG.`);
        } else {
            if (UserIMC<IMCSobrepeso) {
                DefinirImagemIMCSobrepeso()
                console.log("Sobrepeso");
                ExibirTextoNaTela('p', `Seu peso ideal seria de ${PesoMinimo} KG até ${PesoMaximo} KG.`);
            } else {
                DefinirImagemIMCObesidade()
                console.log("Obesidade");
                ExibirTextoNaTela('p', `Seu peso ideal seria de ${PesoMinimo} KG até ${PesoMaximo} KG.`);
            }
        }
    }

}

function LimpaValores() {
    InputValor = document.querySelector('input');
    InputValor.value='';
}

function ReiniciarCalculo(){
    ContadorCliques = 0;
    UserAltura = '';
    UserPeso = '';
    UserIMC = '';
    ResultadoDecimal = '';
    LimpaValores();
    ExibirTextoMensagemIniciar();
    EstadoInicial();
    DefinirImagemIMCPadrao();
}

function EstadoInicial(){
    document.getElementById ('BotaoProxima').removeAttribute('disabled');
    document.getElementById ('BotaoCalcular').setAttribute('disabled',true);
    document.getElementById ('BotaoReiniciar').setAttribute('disabled',true);
}

function Estadointermediario(){
    document.getElementById ('BotaoProxima').setAttribute('disabled',true);
    document.getElementById ('BotaoCalcular').removeAttribute('disabled');
    document.getElementById ('BotaoReiniciar').setAttribute('disabled',true);
}

function EstadoFinal(){
    document.getElementById ('BotaoProxima').setAttribute('disabled',true);
    document.getElementById ('BotaoCalcular').setAttribute('disabled',true);
    document.getElementById ('BotaoReiniciar').removeAttribute('disabled');
}

function DefinirImagemIMCPadrao(){
    var ImagemResultado = document.getElementById('ImagemIMC');
    ImagemResultado.src = '/img/ia.png';
}

function DefinirImagemIMCAbaixo(){
    var ImagemResultado = document.getElementById('ImagemIMC');
    ImagemResultado.src = '/img/IMC_ABAIXO.png';
}
function DefinirImagemIMCNormal(){
    var ImagemResultado = document.getElementById('ImagemIMC');
    ImagemResultado.src = '/img/IMC_NORMAL.png';
}

function DefinirImagemIMCSobrepeso(){
    var ImagemResultado = document.getElementById('ImagemIMC');
    ImagemResultado.src = '/img/IMC_SOBREPESO.png';
}

function DefinirImagemIMCObesidade(){
    var ImagemResultado = document.getElementById('ImagemIMC');
    ImagemResultado.src = '/img/IMC_OBESIDADE.png';
}

ExibirTextoMensagemIniciar();