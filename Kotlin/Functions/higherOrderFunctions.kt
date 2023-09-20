
import kotlin.math.*

fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
    return operation(x, y)
}

fun calculo(x: Double, y: Double, operation: (Double, Double) -> Double): Double {
    return operation(x, y)
}

fun sum(x: Int, y: Int) = x + y
fun mult(x: Int, y: Int) = x * y
fun div(x: Int, y: Int) = x / y
fun expo(x: Double, y: Double) = x.pow(y)

fun main() {
    val sumResult= calculate(4, 5, ::sum)
    val mulResult = calculate(4, 5) { a, b -> a * b }
    val divResult = calculate(20, 5, ::div)
    val expoResult = calculo(8.0, 3.0, ::expo)
    println("Resultado da exponenciação: $expoResult")
    println("sumResult $sumResult, mulResult $mulResult, divResult $divResult expoResult $expoResult")
}

