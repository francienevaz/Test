// Se deseja permitir a herança de classe, 
// marque a classe com o modificador open.

open class Dog {    
    
    // assim como nas classes, para permitir o uso de um método e modificá-lo use o open
    open fun sayHello() {      
        println("wow wow!")
    }
}

// pode-se ler que o Yorkshire é do tipo Dog
class Yorkshire : Dog() { 
    
    // override tem como função sobreescrever a função sayHello()
    override fun sayHello() { 
        println("uau uau!")
    }
}

fun main() {
    // dog é do tipo Dog recebe Yorkshire()
    val dog: Dog = Yorkshire()
    dog.sayHello()
}