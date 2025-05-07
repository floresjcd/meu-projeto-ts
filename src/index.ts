function saudar(nome: string): string {
  return `Olá, ${nome}! Bem-vindo(a) ao TypeScript.`;
}

let usuario: string = "Estudante";
console.log(saudar(usuario));

// Tente introduzir um erro de tipo para ver o VS Code e o compilador agindo:
// usuario = 123; // Isso mostrará um erro no VS Code
