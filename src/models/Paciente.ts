// src/models/Paciente.ts

export class Paciente {
    // Propriedades da classe
    nomePaciente: string;
    private senha: number;
    private usuario: string;
  
    // Construtor da classe
    constructor(nomePaciente: string, senha: number, usuario: string) {
      this.nomePaciente = nomePaciente;
      this.senha = senha;
      this.usuario = usuario;
    }
  
    // Método para agendar uma consulta
    agendarConsulta(data: Date, medico: string): void {
      // Implemente a lógica para agendar a consulta aqui
      console.log(`Consulta agendada para ${this.nomePaciente} com o médico ${medico} na data ${data}`);
    }
  }