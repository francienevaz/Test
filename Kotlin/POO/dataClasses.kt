// data class - criamos uma classe com modificador de dados

data class User(val name: String, val id: Int) {
    override fun equals(other: Any?) =
        other is User && other.id == this.id
    // Override(sobreescreve) o equals() padrão do Kotlin fazendo a comparação
    //  apenas dos ids dos usuários
}


fun main() {
    val user = User("Marina", 1)
    println(user)
    // saída do console: User(name=Alex, id=1)

    val secondUser = User("Marina", 1)
    val thirdUser = User("Max", 2)

    println("user == secondUser: ${user == secondUser}")
    // saída console: "user == secondUser: true"
    println("user == thirdUser: ${user == thirdUser}")
    // saída console: "user == thirdUser: false"

    // hashCode() function
    println(user.hashCode())
    //saída console: 63347075
    println(secondUser.hashCode())
    //saída console: 63347075
    println(thirdUser.hashCode())
    //saída console: 2390846

    // copy() function
    println(user.copy())                                   
    // faz uma cópia do user
    println(user === user.copy())                          
    // verifica se a referência das variáveis são iguais
    // retorna false, pois não estão armazenadas no mesmo PATH na memória;
    println(user.copy("Max"))                              
    // faz uma cópia, passando "Max" como valor substituto
    // saída no console: name="Max",id=1
    println(user.copy(id = 3))                             
    // sáida no console: name="Marina",id=3

    println("name = ${user.component1()}")                 
    // é possível passar o componente da data class, como em objetos
    //retorna: name = Marina
    println("id = ${user.component2()}")
    //retorna: id = 1
}