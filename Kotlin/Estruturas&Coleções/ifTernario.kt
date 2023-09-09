// There is no ternary operator in Kotlin: condition ? then : else.
// Instead, if may be used as an expression:

fun main() {
    fun maxOld(a: Int, b: Int): Int {
        if(a > b) {
            return a
        } else {
            return b
        }
    }
    // as funções estão fazendo a mesma coisa, só na expressão abaixo 
    // só foi necessário uma unica linha de código:

    fun max(a: Int, b: Int) = if (a > b) a else b

    println(maxOld(99, 42))
    println(max(15, 42))
}

// na função max, estamos pegando o valor maior, passando a e b como parâmetro, e verificando se a é maior que b, se sim imprime a, se não imprime b