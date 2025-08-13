import { createServer } from 'vite';
import path from 'path';

async function startDev() {
  try {
    console.log('🚀 Starting Yuvraj\'s Portfolio Development Server...');
    
    const server = await createServer({
      root: path.resolve('./client'),
      publicDir: path.resolve('./attached_assets'),
      server: {
        port: 5173,
        host: '0.0.0.0',
        open: true
      },
      resolve: {
        alias: {
          '@': path.resolve('./client/src'),
          '@assets': path.resolve('./attached_assets')
        }
      }
    });

    await server.listen();
    
    console.log('✅ Portfolio server running at:');
    console.log('   🌐 Local:   http://localhost:5173');
    console.log('   📱 Network: http://0.0.0.0:5173');
    console.log('');
    console.log('📸 Profile photo should now be visible!');
    
  } catch (error) {
    console.error('❌ Error starting server:', error);
    console.log('');
    console.log('💡 Try running: cd client && npx vite');
  }
}

startDev();