fun eatCake() = println("Eat a Cake")
fun bakeACake() = println("Bake a Cake")

fun main() {
    var cakeEaten = 0
    var cakeBaked = 0

    while(cakesEaten < 5) {
        eatCake()
        cakesEaten ++
    }

    do {
        bakeACake()
        cakesBaked ++
    } while (cakesBaked < cakesEaten)
}

