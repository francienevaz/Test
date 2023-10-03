fun <T> T?.nullSafeToString() = this?.toString()?: "Ausência de valor"

fun main() {
    println(null.nullSafeToString())
    println("Hello".nullSafeToString())
}