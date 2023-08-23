// #include <iostream>
// #include <stdio.h>
// necessário baixar um copilador para C++ e compilar o código fonte do projeto no terminal com: g++ -o main main.cpp

int main(void) {
  // declara as variáveis, o float é para tipar - no caso o float quer dizer que é um número no meu entendimento
  float nota1, nota2, media;
// pegar a nota1 e nota2 que o usuário digitar e retornar a média
  printf("Digite a primeira nota: ");
  scanf("%f", &nota1);
  printf("Digite a segunda nota: ");
  scanf("%f", &nota2);

// calcular a média
  media = (nota1 + nota2) / 2;

// verificar se é >= 7

  if(media >= 7)
    printf("Aprovado");
  else
    printf("Reprovado");
  
  return 0;
}