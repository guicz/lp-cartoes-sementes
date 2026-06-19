import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT || 3000);
const buildDir = path.join(__dirname, 'build');

app.use(express.static(buildDir));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
