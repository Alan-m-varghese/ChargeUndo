import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { handleDevApiRequest } from './server/dev-adapter.ts';

function cloudflareWorkerPlugin(): Plugin {
  return {
    name: 'vite-plugin-cloudflare-worker',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && (req.url.startsWith('/api/') || req.url === '/api')) {
          try {
            await handleDevApiRequest(req, res);
          } catch (err: any) {
            console.error('API middleware error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal API Server Error', message: err.message }));
          }
        } else {
          next();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflareWorkerPlugin()],
});
