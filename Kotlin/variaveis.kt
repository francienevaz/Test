fun soma (x: Int, y: Int): Int {
	return x + y
}

fun main() {    
    var a = "initial" // var é mutável
	println(a)

	val b = 3 // val é imutável
	val c = 4

	println(soma(b, c))
}
// exemplo de declaração de uma variável sem inicialização:

fun someCondition() = true

val d: Int  // 1

if (someCondition()) {
    d = 1   // 2
} else {
    d = 2   // 2
}

println(d) // 3