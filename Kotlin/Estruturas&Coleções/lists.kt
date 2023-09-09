// listOf - listas imutáveis - read only - somente leitura
// mutableListOf - listas mutáveis

val systemUsers: MutableList<Int> = mutableListOf(1,2,3)
val sudoers: List<Int> = systemUsers

fun addSystemUser(newUser: Int) {
    systemUsers.add(newUser); // adiciona um novo usuário ao sistema
}

fun getSysSudoers(): List<Int> {
    return sudoers
}

fun main() {
    addSystemUser(4)
    println("Tot sudoers: ${getSysSudoers().size}")
    getSysSudoers().forEach {
        i -> println("Some useful info on user $i")
    }
    // Esse exemplo abaixo retorna um erro pois a função
    // getSysSudoers() está retornando sudoers que é uma lista Imutável
    // getSysSudoers().add(5) <- Error!
}