// a classe Cat recebe um parâmetro imutável do tipo String
open class Cat(val origin: String) {
// sayHello() não pode ser sobreescrita pois não começa com open
    fun sayHello() {
        println("A cat from $origin says: meaow!")
    }
}

//Siames é do tipo Cat, logo ele herda tudo o que está dentro dessa classe
class Siames : Cat("Egito")

fun main() {
    // por padrão ao definir a variável cat, ela seria do tipo Siames()
    // se ela não fosse tipada como colocamos abaixo
    // val cat: Cat - cat do tipo Cat
    val cat: Cat = Siames()
    cat.sayHello()
}