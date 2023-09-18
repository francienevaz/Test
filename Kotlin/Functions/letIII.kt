fun main () {
    val numero: Int? = 42

    numero?.let { 
    // Este bloco será executado apenas se numero não for nulo
    val potencia = it * it
    println("O quadrado de $it é $potencia")
    } ?: run {
    // Este bloco será executado se numero for nulo
    // ?: esse é o operador Elvis
    // Se numero for null, o operador Elvis ?: será usado para executar o bloco run dentro do qual é impressa a mensagem "O número é nulo".
    // Este exemplo demonstra como o let pode ser usado para realizar operações em objetos não nulos e como você pode usar o operador Elvis ?: para fornecer um bloco de código alternativo a ser executado quando o objeto for nulo.
    println("O número é nulo")
    }

}