import fs from 'node:fs';
import path from 'node:path';

const buildDir = path.resolve('build');
const indexPath = path.join(buildDir, 'index.html');
const staticRoutes = ['legal/privacidade', 'legal/cookies', 'legal/consentimentos'];

if (!fs.existsSync(indexPath)) {
  throw new Error(`Build index not found: ${indexPath}`);
}

for (const route of staticRoutes) {
  const routeDir = path.join(buildDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
}

console.log(`Static route fallbacks generated for ${staticRoutes.length} routes`);
