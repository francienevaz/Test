sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
}

fun processResult(result: Result) {
    when (result) {
        is Result.Success -> {
            println("Success: ${result.data}")
        }
        is Result.Error -> {
            println("Error: ${result.message}")
        }
    }
}

fun main() {
    val result = Result.Success("Deu certo")
    val resultError = Result.Error("Não foi dessa vez!")
    processResult(resultError)
}
