// Esse tipo de classe genérica facilita por que usa um parâmetro genérico, sem aquela restrição de tipagem

class MutableStack<E> (vararg items: E) {
    private val elements = items.toMutableList()

    fun push(element: E) = elements.add(element)

    fun peek() : E = element.last()

    fun pop() : E = elements.removeAt(elements.size - 1)

    fun isEmpty() = elements.isEmpty()

    fun size() = elements.size

    override fun toString() = "MutableStack(${elements.joinToString()})"
}

fun main() {
    val stack = MutableStack(0.45, 3.14, 2.9)
    stack.push(4.57)
    println(stack)

    println("peek() : ${stack.peek}")
    println(stack)

    for (i in 1..stack.size()){
        println("pop(): ${stack.pop()}")
        println(stack)
    }
}