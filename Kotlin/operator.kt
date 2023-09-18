fun main() {
    operator fun Int.times(str: String) = str.repeat(this)
    println(5 * "Bye ")

    operator fun String.get(range: IntRange) = substring(range)
    val str = "Always forgive your enimies; nothing annoys them so much"
    println(str[0..28])
    
}
