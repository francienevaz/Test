// A função run é geralmente usada quando você deseja realizar várias operações em um objeto sem precisar se referir a ele repetidamente.
// Dentro do bloco run, podemos acessar as propriedades do objeto pessoa diretamente sem repetidamente referenciar pessoa. Também modificamos a idade dentro desse contexto

data class Pessoa(val nome: String, var idade: Int)

fun main() {
    val pessoa = Pessoa("Pedro", 30)

    val resultado = pessoa.run {
        println("Nome: $nome")
        println("Idade: $idade")
        idade += 1 // Modificando a idade dentro do contexto do objeto
        "Execução bem-sucedida" // Valor retornado
    }

    println("Resultado da execução: $resultado")
    
    // A idade da pessoa foi modificada dentro do contexto do objeto
    println("Nova idade da pessoa: ${pessoa.idade}")
}
