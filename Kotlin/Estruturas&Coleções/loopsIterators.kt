class Animal(val name: String)
// criamos uma classe animal que recebe uma variável imutável do tipo String

// a classe Zoo recebe uma variável imutável do tipo lista, que recebe Animal como parâmetro
class Zoo(val animals: List<Animal>) {
 
// criamos uma função operator que permite a iteração em Animal
// o Iterator<Animal> permite iterar em Animal personalizável, é criada dentro da Classe
 	operator fun iterator(): Iterator<Animal> {
        return animals.iterator()
    }   
}

fun main() {
// Zoo recebe uma lista de animais onde passamos os parâmetros para Animal
    val zoo = Zoo(listOf(Animal("bird"), Animal("snake")))

// fazemos um laço for para iterar por cada animal em zoo, que é uma lista, e retornamos uma mensagem
    for (animal in zoo) {
        println("Watch out, it's a ${animal.name}")
    }
}