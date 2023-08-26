fun multiply(x: Int, y: Int) = x * y
// a função multiply recebe x e y tipados como parâmetro

fun printMessage(message: String) {
   println(message)
}

fun printMessageWithPrefix(message: String, prefix: String = "Info"){
    println("[$prefix] $message")
}

fun plus(x: Int, y: Int) : Int {
    return x + y
}
fun main() {
    println(multiply(100, 5))
    println(printMessage("Hello World!"))
    println(printMessageWithPrefix("Eae"))
    println(printMessageWithPrefix(prefix = "Bug", message = "Deu ruim"))
    println(plus(37,63))
}