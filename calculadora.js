const anuncios = [];

// 1º Parte -  Uma calculadora de alcance de anúncio online.
function estimativa() {
    let valorRecebido = parseFloat(document.getElementById('inputestatistica').value);
    //document.getElementById('valorDigitad').innerHTML = valorRecebido;

    let viewMax = estimativaMax(valorRecebido)
    document.getElementById('valorDigitad').innerHTML = viewMax;
}

function estimativaMax(valorRecebido) {
    /** Valores baseados em dados de anúncios anteriores, por R$1.00.
        view Originais = 30 | view Organicas = 86.40 | valor centavos = 100; */
    return ((valorRecebido * 100) * (30 + 86.40) / 100).toFixed(0);
}


// 2ª Parte - Um sistema de cadastro de anúncios.
function capturar() {
    let anuncio = document.getElementById('inputnome').value;
    let cliente = (document.getElementById('inputcliente').value);
    let inicio = document.getElementById('inputdateIni').value;
    let fim = document.getElementById('inputdateEnd').value;
    let valor = document.getElementById('inputvalor').value;


    criarAuncio(anuncio, cliente, inicio, fim, valor)
    alert("Anúncio criado");

}
function tratarDados(anuncio, cliente, inicio, fim, valor) {

    return {
        anuncio: anuncio,
        cliente: (cliente.toLowerCase()),
        inicio: (parseInt(((inicio).split("-")).join(""))),
        fim: (parseInt(((fim).split("-")).join(""))),
        valor: (parseFloat(valor))
    }
}
function criarAuncio(anuncio, cliente, inicio, fim, valor) {
    let x = tratarDados(anuncio, cliente, inicio, fim, valor)
    anuncios.push(x);
}


// Filtrar
function filtro() {
    let cliente = (document.getElementById('inputcliente').value);
    let inicio = document.getElementById('inputdateIni').value;
    let fim = document.getElementById('inputdateEnd').value;
    let x;

    if (cliente) {
        x = filtrarCliente(Ftcliente);
        relatorio(inicio && fim ? filtrarDta(inicio, fim, x) : x); //return x (filtro do cliente)
    }
    else if (inicio && fim) {
        relatorio(filtrarDta(inicio, fim, x))
    }
    else {
        alert("Nenhum parâmetro inserido para filtrar");
    }
}

function filtrarDta(dtain, dtafim, x) {
    let dtaInicioInt = parseInt(((dtain).split("-")).join(""));
    let dtaFimInt = parseInt(((dtafim).split("-")).join(""));
    let y;

    x.forEach((x, i, a) => {
        if (x.inicio <= dtaInicioInt && dtaFimInt >= x.fim) {
            y.push(x)
        }
    })
    return y;
}

function filtrarCliente(Ftcliente) {
    Ftcliente = Ftcliente.toLowerCase();
    anuncios.forEach((x, i, a) => {
        return x.filter(x => x.cliente === Ftcliente)
    })
}
function relatorio(x) {
    //Base de dados por 1,00    
    //viewOriginal = 30 | click = 3.6 | share = 0.54 * 4 |viewRedeSocial = 86.40;
    let valorTT, qtdaView, qtdaClick, qtdaShare;

    //--------------------------------------------------------------------------------------------------------
    let ini = new Date(x.inicio)
    let fim = new Date(x.fim)

    const diff = Math.abs(fim.getTime() - ini.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    valorTT = x.valor * days //float
    qtdaView = (valorTT * 116.4) / 100
    qtdaShare = (valorTT * 2.16) / 100
    qtdaClick = (valorTT * 3.6) / 100
}
