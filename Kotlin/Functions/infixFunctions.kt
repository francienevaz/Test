fun main() {
  infix fun Int.times(str: String) = str.repeat(this)
  println(5 times "Rodando ")

  val pair = "Ferrari" to "Fran"
  println(pair)

  infix fun String.onto(other: String) = Pair(this, other)
  val myPair = "McLaren" onto "Lucas"
  println(myPair)

  val sophia = Person("Sophia")
  val claudia = Person("Missy")
  sophia likes claudia
    
}
class Person(val name: String) {
  val likedPeople = mutableListOf<Person>()
  infix fun likes(other: Person) {
    likedPeople.add(other)
  }
}

