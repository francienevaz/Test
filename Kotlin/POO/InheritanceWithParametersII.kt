open class Lion(val name: String, val origin: String) {
    fun sayHello() {
        println("$name, the lion from $origin says: I'm the King of the Forest!")
    }
}

// essa classe Africa recebe name do tipo String como parâmetro
// a classe Africa é do tipo Lion que já foi definida lá emcima com dois parâmetros
// name é passada como o valor de name, e origin já é fixada 
// antes de chamar a class na main function

class Africa(name: String) : Lion(name = name, origin = "África")

fun main() {
    val lion: Lion = Africa("Leonard")
    lion.sayHello()
}