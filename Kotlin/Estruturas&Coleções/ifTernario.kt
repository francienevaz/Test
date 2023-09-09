// There is no ternary operator in Kotlin: condition ? then : else.
// Instead, if may be used as an expression:

fun main() {
    fun max(a: Int, b: Int) = if (a > b) a else b

    println(max(15, 42))
}

// na função max, estamos pegando o valor maior, passando a e b como parâmetro, e verificando se a é maior que b, se sim imprime a, se não imprime b