// as coleções do tipo Set não permitem que haja duplicação de dados

val openIssues: MutableSet<String> = mutableSetOf("IDunique", "IDuniqueII", "IDuniqueIII") // 1

fun addIssue(uniqueID: String): Boolean {                                                       
    return openIssues.add(uniqueID)                                                             // 2
}

fun getStatusLog(isAdded: Boolean): String { 
    // "expressão que se assemelha ao if ternário =>=>"                                                      
    return if (isAdded) "registered correctly." else "marked as duplicate and rejected."          // 3
}

fun main() {
    val aNewIssue: String = "IDuniqueIV"
    val anIssueAlreadyIn: String = "IDunique" 

    println("Issue $aNewIssue ${getStatusLog(addIssue(aNewIssue))}")                              // 4
    println("Issue $anIssueAlreadyIn ${getStatusLog(addIssue(anIssueAlreadyIn))}")                // 5 
}