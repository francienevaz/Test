fun main() {

    for (i in 0..3) {
        print(i)
    }
    print(" ")
    
    // 0123
    
    for (i in 0 until 3) {
        print(i)
    }
    print(" ")
    
    // 012
    
    for (i in 2..8 step 2) {
        print(i)
    }
    print(" ")
    
    // 2468
    
    for (i in 3 downTo 0) {
        print(i)
    }
    print(" ")
    
    // 3210
}