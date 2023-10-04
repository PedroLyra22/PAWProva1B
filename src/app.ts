import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rota para criar um novo paciente
app.post('/pacientes', async (req, res) => {
  try {
    const { nomePaciente, senha, usuario } = req.body;
    const paciente = await prisma.paciente.create({
      data: {
        nomePaciente,
        senha,
        usuario,
      },
    });
    res.json(paciente);
  } catch (error) {
    console.error('Erro ao criar paciente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para buscar todos os pacientes
app.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await prisma.paciente.findMany();
    res.json(pacientes);
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para buscar um paciente por ID
app.get('/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await prisma.paciente.findUnique({
      where: { id: Number(id) },
    });
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    res.json(paciente);
  } catch (error) {
    console.error('Erro ao buscar paciente por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para atualizar um paciente por ID
app.put('/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nomePaciente, senha, usuario } = req.body;
  try {
    const updatedPaciente = await prisma.paciente.update({
      where: { id: Number(id) },
      data: {
        nomePaciente,
        senha,
        usuario,
      },
    });
    res.json(updatedPaciente);
  } catch (error) {
    console.error('Erro ao atualizar paciente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para deletar um paciente por ID
app.delete('/pacientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.paciente.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Paciente excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir paciente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
