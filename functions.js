function novaSerie (nome, serie) {
    return {nome, serie}
}

let arr = [
    novaSerie("Pedro", "The Last of us"),
    novaSerie("João", "Wandinha"),
    novaSerie("Weslley", "The Big Bang Theory"),
    novaSerie("Bruno", "Smallville")
]

function seriePreferida (pessoa) {
    return pessoa.nome + " sua série preferida é: " + pessoa.serie ;
}

console.log(arr.map(seriePreferida));

// o método map cria uma nova array totalmente personalizada
