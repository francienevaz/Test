// O filter como o próprio nome deixa implícito serve para filtrar os dados da lista

fun main() {

    val numbers = listOf(1, -2, 3, -4, 5, -6)      // 1

    // esse é o exemplo de uma lambda, onde o x é definido
    val positives = numbers.filter { x -> x > 0 }  // 2

    // essa é outra forma de filtrar, sem uma variável pré-definida
    val negatives = numbers.filter { it < 0 }      // 3

    println("Numbers: $numbers")
    println("Positive Numbers: $positives")
    println("Negative Numbers: $negatives")
}