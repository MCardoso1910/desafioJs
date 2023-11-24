let rankingJog = 3

let saldoJogador = getBatalhas(50, 20)
console.log("O Herói tem o saldo de vitorias, " + saldoJogador + " e esta no nivel " + rankingJog)

function getBatalhas(vitorias, derrotas ){
    let soma = vitorias - derrotas
    return soma
}

switch(rankingJog){
    case 1:
        console.log("Ferro")
        break

    case 2:
            console.log("Bronze")
         break

    case 3:
        console.log("Prata")
        break

    case 4:
        console.log("Ouro")
        break

    case 5:
        console.log("Diamante")
        break

    case 6:
        console.log("Lendario")
        break

    default:
        console.log("Lendario")

}


