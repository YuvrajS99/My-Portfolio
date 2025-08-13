import { createServer } from 'vite';

const server = await createServer({
  server: {
    port: 5000,
    host: '0.0.0.0'
  }
});

await server.listen();
console.log('Portfolio development server running on port 5000');