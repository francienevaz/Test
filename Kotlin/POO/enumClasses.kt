// enumerações - esse tipo de classes representa um número finito de possibilidade dentro de uma estrutura
// Enums em Kotlin são uma forma de criar um tipo de dados que representa um conjunto fixo de valores constantes. Eles são usados para representar conjuntos de constantes que são nomeados de forma significativa. No contexto da programação, os enums são frequentemente usados para representar opções, estados ou categorias distintas.

enum class State {
    IDLE, RUNNING, FINISHED
}

fun main () {
    val state = State.RUNNING

    val message = when (state) {
        State.IDLE -> "The car is idle"
        State.RUNNING -> "It's running"
        State.FINISHED -> "The job has finished!"
    }

    println(message)
}

enum class Routine {
    Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado
}    
fun main () {

    val state = Routine.Terça
    
    val message = when (state) {   
        Routine.Domingo -> "Spinning"    
        Routine.Segunda -> "Yoga"    
        Routine.Terça -> "Musculação"
        Routine.Quarta -> "Aula de Natação"
        Routine.Quinta -> "Teste de aptidão"
        Routine.Sexta -> "Muay-Thai"
        Routine.Sábado -> "Boxe"
    }
    println(message)
}

enum class Color(val rgb: Int){
    RED(0xFF0000), 
    GREEN(0x00FF00),
    BLUE(0x0000FF),
    YELLOW(0xFFFF00);

    fun containsRed() = (this.rgb and 0xFF0000 != 0)
}

fun main() {
    val red = Color.RED
    println(red)
    println(red.containsRed())
    println(Color.BLUE.containsRed())
    println(Color.YELLOW.containsRed())
}

// console:
// RED
// true
// false
// true
