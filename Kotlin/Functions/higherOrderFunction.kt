import kotlin.math.*

fun operation(): (Double, Double) -> Double {                                     
    return ::cube
}

fun cube(x: Double, y: Double) = x.pow(y)                                       

fun main() {
    val func = operation()                                          
    println(func(2.0, 3.0))                                              
}