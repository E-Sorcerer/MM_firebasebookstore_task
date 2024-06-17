import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/E-Sorcerer/MM_firebasebookstore_task/', 
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  } 
});
