// src/models/Agenda.ts

export class Agenda {
    // Propriedades da classe
    data: Date;
    nomePcnt: string;
  
    // Construtor da classe
    constructor(data: Date, nomePcnt: string) {
      this.data = data;
      this.nomePcnt = nomePcnt;
    }
  }