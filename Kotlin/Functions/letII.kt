fun main() {
    val kotlin = "🙂"
    println(kotlin)
    
    val nome: String? = "Wednesday"
	// aqui definimos uma variável nome que recebe uma String que pode ou não ser nula

	val comprimentoDoNome = nome?.let { 
    println("O nome é: $it")
    it.length
	}

	// aqui definimos uma variável que vai executar o código do let, somente se nome não foi nulo
	// it é usado dentro do let para se referir a variável que está sendo percorrida, no caso o nome

	println("O comprimento do nome é: $comprimentoDoNome")
}