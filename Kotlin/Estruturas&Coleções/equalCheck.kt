fun main() {
    val philosophers = setOf("Isaac Newton", "Aristóteles", "Paul Dirac")
    val physicists = setOf("Aristóteles", "Paul Dirac", "Isaac Newton")

    println(philosophers == physicists) // 1
    println(philosophers === physicists) //2
}

//1 true verifica o conteúdo
//2 false verifica a referência
