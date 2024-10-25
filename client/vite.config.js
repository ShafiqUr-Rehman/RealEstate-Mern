import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://real-estate-mern-frontend-one.vercel.app/',  //http://localhost:3000
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});