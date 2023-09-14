// O hashcode é uma representação numérica única que é gerada a partir de um objeto em linguagens
// de programação. É usado para otimizar a pesquisa e acesso a dados em estruturas de dados como 
// tabelas de hash

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  }
  
  const myStr = "Não tem de queijo só de batata!";
  const myHashCode = hashCode(myStr);
  console.log(`O hashcode da string "${myStr}" é ${myHashCode}`);

  // O hashcode da string "Não tem de queijo só de batata!" é 1966551947