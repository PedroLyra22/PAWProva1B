// src/models/Consulta.ts

export class Consulta {
    // Propriedades da classe
    data: Date;
    nomePcnte: string;
    nomeDents: string;
  
    // Construtor da classe
    constructor(data: Date, nomePcnte: string, nomeDents: string) {
      this.data = data;
      this.nomePcnte = nomePcnte;
      this.nomeDents = nomeDents;
    }
  
    // Método para registrar uma consulta
    registrarConsult(): void {
      // Implemente a lógica para registrar uma consulta aqui
    }
  
    // Método para consultar a agenda
    consultarAgend(): void {
      // Implemente a lógica para consultar a agenda aqui
    }
  }