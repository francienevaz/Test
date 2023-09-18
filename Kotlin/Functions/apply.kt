data class PersonDescription( var name : String, var age : Int, var about : String) {
    constructor() : this("", 0, "")
}

fun main() {
    val melissa = PersonDescription()

    val description = melissa.apply {
        name = " Melissa"
        age = 25
        about = " Frontend Developer"
    }.toString()

    println(description)
}
