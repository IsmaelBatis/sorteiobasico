//adiciona um ouvinte de evento  ao butão com o ID 'sorteioButton'
//quando o butão é clicado, a função anônima é executada 
document.getElementById('sorteioButton').addEventListener('click', function(){

    //inicia um array vazio que armazena os numeros sorteados 
    let numeros = [];

    //loop que continua ate que armazenará os numeros sorteados
    while (numeros.length < 15){

        //gera um numero aleatorio entre 1 e 15
        let numeroAleatorio = Math.floor(Math.random() * 25) +1;

        //verificar se o numero aleatorio ainda não foi sorteado.
        // Se o numero ainda na estta mao array 'numeros' , ele é adicionado
        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
    }
    //ordena o array 'numeros' em ordem crescente.
    numeros.sort(function (a, b){
        return a - b;
    });
    //Exibe os numeros sorteados em uma div com Id 'resultado'.
    //os numeros são exibidos como uma string, separados por virgulas
    document.getElementById('resultado').innerText = numeros.join(', '); 
});
