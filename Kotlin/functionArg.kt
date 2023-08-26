fun main() {

    //vararg permite que seja adicionado várias variáveis do mesmo tipo, no caso do exemplo abaixo do tipo String

    fun printAll(vararg messages : String) {
        for (message in messages){
            println("$message")
        }
    }
    printAll("Eae", "estou", "codando", "em", "Kotlin", "haha")

    fun printAllWithPrefix(vararg messages: String, prefix: String) {
        for (m in messages) println(prefix + m)
    }

    printAllWithPrefix(
        "Hello", "Hola", "Hey there", "Boun Journey",
        prefix = "Greetings:"
    )

    fun log(vararg entries: String) {
        printAll(*entries)

        //o * é um spread operator que está sendo usando para chamar a função printAll que também recebe um vararg como argumento, o vararg é um array, logo o * está identificando que a printAll também é um vararg, se tirar não funciona corretamente

    }
}