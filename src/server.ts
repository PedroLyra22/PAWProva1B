// Importe as dependências necessárias
import express from 'express';

// Crie uma instância do Express
const app = express();
const port = process.env.PORT || 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});