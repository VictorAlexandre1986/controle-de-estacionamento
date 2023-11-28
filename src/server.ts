import app  from './app';

// Configurar o fuso horário para São Paulo, Brasil
process.env.TZ = 'America/Sao_Paulo';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});