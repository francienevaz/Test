data class PersonDescription( var name : String, var age : Int, var about : String) {
    constructor() : this("", 0, "")
}

fun writeCreationLog(p: PersonDescription) {
    println("Person created with id ${p.name}")
}

fun main() {
    val melissa = PersonDescription("Melissa", 25, "Dev Frontend")
    .also {
        writeCreationLog(it)
    }

}