class Configuration(val host: String, val port: Int)

fun main() {
    val configuration = Configuration(host = "127.0.0.1", port = 30000)

    with(configuration) {
        println("$host:$port")
    }

    //instead of:
    println("${configuration.host}:${configuration.port}")

    // or
    configuration.run {
        println("$host:$port")
    }
}