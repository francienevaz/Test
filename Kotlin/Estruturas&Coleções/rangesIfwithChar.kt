// é possível trabalhar com intervalos entre caracteres como mostra abaixo
fun main() {
    val x = 'e'
    if (x in 'a'..'h') {            // 1
        print("x is in range from a to h")
    }
println()
​
    if (x !in 'r'..'u') {          // 2
        print("x is not in range from r..u")
    }
}

//x is in range from a to h
//x is not in range from r..u