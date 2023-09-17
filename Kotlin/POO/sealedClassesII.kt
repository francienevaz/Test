sealed class Mamífero(val name: String)

class Cat(val catName: String) : Mamífero( catName)
class Human(val humanName: String, val job: String) : Mamífero( humanName)

fun greetMammal(mammal: Mamífero) : String {
    when (mammal) {
        is Human -> return "Hello ${mammal.name}; You're working as a ${mammal.job}"
        is Cat -> return "Hello ${mammal.name}"
    }
}

fun main() {
    val cat = Cat("Chloe")
    val human = Human("Fran", "DevFrontend")

    println(greetMammal(cat))
    println(greetMammal(human))
}

// Hello Chloe
// Hello Fran; You're working as a DevFrontend