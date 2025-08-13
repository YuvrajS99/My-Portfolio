import { createServer } from 'vite';

async function startServer() {
  try {
    const server = await createServer({
      root: './client',
      server: {
        port: 5173,
        host: '0.0.0.0',
        open: true
      }
    });

    await server.listen();
    console.log('🚀 Portfolio development server running at:');
    console.log('   Local:   http://localhost:5173');
    console.log('   Network: http://0.0.0.0:5173');
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();