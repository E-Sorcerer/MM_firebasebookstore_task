// https://vitejs.dev/config/
export default defineConfig({
  base: '/firebasebookstore/', 
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  } 
})