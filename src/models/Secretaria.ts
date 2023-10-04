// src/models/Secretaria.ts

export class Secretaria {
    // Propriedades da classe
    nome: string;
    private RG: number;
  
    // Construtor da classe
    constructor(nome: string, RG: number) {
      this.nome = nome;
      this.RG = RG;
    }
  
    // Método para cadastrar paciente
    cadsPcnte(): void {
      // Implemente a lógica para cadastrar um paciente aqui
    }
  
    // Método para gerar um nome
    gerarNome(): string {
      // Implemente a lógica para gerar um nome aqui
      return 'Nome Gerado';
    }
  
    // Método para gerar uma senha
    gerarSenha(): number {
      // Implemente a lógica para gerar uma senha aqui
      return 12345; // Exemplo de senha gerada
    }
  
    // Método para agendar uma consulta
    agendarConsulta(): void {
      // Implemente a lógica para agendar uma consulta aqui
    }
  
    // Método para emitir um relatório
    emiteRel(): void {
      // Implemente a lógica para emitir um relatório aqui
    }
  
    // Método para conferir a agenda
    confereAgenda(): void {
      // Implemente a lógica para conferir a agenda aqui
    }
  
    // Método para alterar a agenda
    alterarAgenda(): void {
      // Implemente a lógica para alterar a agenda aqui
    }
  }